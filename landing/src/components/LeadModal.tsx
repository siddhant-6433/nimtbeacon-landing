import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  X,
  Loader2,
  CheckCircle,
  CalendarDays,
  FileDown,
  ClipboardList,
  Package,
  Headphones,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import {
  COUNTRY_CODES,
  NIMT_BEACON_CAMPUS,
  submitLead,
  type CountryCode,
} from "../lib/leadCapture";
import { asset } from "../lib/asset";

// Each "intent" is one CTA — title, blurb, button label, optional download URL.
export type LeadIntent =
  | "admission"
  | "schedule-visit"
  | "download-brochure"
  | "download-hostel-schedule"
  | "download-hostel-pack"
  | "speak-to-counsellor";

interface IntentConfig {
  title: string;
  subtitle: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  /** If set, file is opened in a new tab after successful submit. */
  downloadUrl?: string;
  /** Stamped onto the lead's notes/message field for the CRM. */
  noteTag: string;
  icon: React.ReactNode;
}

const INTENTS: Record<LeadIntent, IntentConfig> = {
  "admission": {
    title: "Apply for Admission",
    subtitle:
      "Share a few details and our admissions team will get in touch within 24 hours.",
    submitLabel: "Submit Inquiry",
    successTitle: "Inquiry Received!",
    successMessage:
      "Our admissions team will contact you within 24 hours.",
    noteTag: "Source: Admission inquiry (landing page)",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  "schedule-visit": {
    title: "Schedule a Campus Visit",
    subtitle:
      "Pick a date that works for you — we'll confirm the slot and show you around.",
    submitLabel: "Request Visit Slot",
    successTitle: "Visit Request Received!",
    successMessage:
      "Our team will reach out shortly to confirm your campus visit slot.",
    noteTag: "Source: Schedule campus visit (landing page)",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  "download-brochure": {
    title: "Download School Brochure",
    subtitle:
      "Get the complete NIMT Beacon brochure — academics, facilities, fees and more.",
    submitLabel: "Download Brochure",
    successTitle: "Brochure on the way!",
    successMessage:
      "Your download will start in a moment. We've also emailed it to you.",
    downloadUrl: "/downloads/nimt-beacon-brochure.pdf",
    noteTag: "Source: Brochure download (landing page)",
    icon: <FileDown className="h-5 w-5" />,
  },
  "download-hostel-schedule": {
    title: "Download Hostel Schedule",
    subtitle:
      "See a typical day at NIMT — wake-up to lights-out, meals, study and play.",
    submitLabel: "Download Schedule",
    successTitle: "Schedule on the way!",
    successMessage:
      "Your download will start in a moment. We've also emailed it to you.",
    downloadUrl: "/downloads/nimt-beacon-hostel-schedule.pdf",
    noteTag: "Source: Hostel schedule download (landing page)",
    icon: <ClipboardList className="h-5 w-5" />,
  },
  "download-hostel-pack": {
    title: "Download Hostel Pack List",
    subtitle:
      "The complete packing checklist for new boarders — uniforms, essentials, what's provided.",
    submitLabel: "Download Pack List",
    successTitle: "Pack List on the way!",
    successMessage:
      "Your download will start in a moment. We've also emailed it to you.",
    downloadUrl: "/downloads/nimt-beacon-hostel-pack.pdf",
    noteTag: "Source: Hostel pack download (landing page)",
    icon: <Package className="h-5 w-5" />,
  },
  "speak-to-counsellor": {
    title: "Speak to an Admissions Counsellor",
    subtitle:
      "Schedule a 15-minute call to discuss your child's fit, fees and the application process.",
    submitLabel: "Request Call Back",
    successTitle: "Call Back Requested!",
    successMessage:
      "An admissions counsellor will call you within one business day.",
    noteTag: "Source: Speak to counsellor (landing page)",
    icon: <Headphones className="h-5 w-5" />,
  },
};

const CLASSES = [
  "Pre Nursery",
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11 - Science (PCM)",
  "Class 11 - Science (PCB)",
  "Class 11 - Commerce",
  "Class 11 - Humanities",
  "Class 12 - Science (PCM)",
  "Class 12 - Science (PCB)",
  "Class 12 - Commerce",
  "Class 12 - Humanities",
];

// ─── Meta Pixel typing ──────────────────────────────────────────────
declare global {
  interface Window {
    fbq?: (
      event: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// ─── Context ────────────────────────────────────────────────────────
interface LeadModalContextValue {
  open: (intent: LeadIntent) => void;
  close: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) {
    throw new Error("useLeadModal must be used within <LeadModalProvider>");
  }
  return ctx;
}

// ─── Provider ───────────────────────────────────────────────────────
export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [intent, setIntent] = useState<LeadIntent | null>(null);

  const open = useCallback((next: LeadIntent) => setIntent(next), []);
  const close = useCallback(() => setIntent(null), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      {intent && <LeadModal intent={intent} onClose={close} />}
    </LeadModalContext.Provider>
  );
}

// ─── Modal ──────────────────────────────────────────────────────────
function LeadModal({
  intent,
  onClose,
}: {
  intent: LeadIntent;
  onClose: () => void;
}) {
  const config = INTENTS[intent];
  const initialFormState = {
    studentName: "",
    parentName: "",
    email: "",
    mobile: "",
    targetClass: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [country, setCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const countryMenuRef = useRef<HTMLDivElement | null>(null);

  // ESC closes the modal, click on backdrop closes it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Outside-click closes the country dropdown.
  useEffect(() => {
    if (!countryOpen) return;
    const onClick = (e: MouseEvent) => {
      if (
        countryMenuRef.current &&
        !countryMenuRef.current.contains(e.target as Node)
      ) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [countryOpen]);

  const isDownload = Boolean(config.downloadUrl);
  const needsClass = intent === "admission" || intent === "schedule-visit";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleMobileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, country.maxLen);
    setFormData((prev) => ({ ...prev, mobile: digits }));
    if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!formData.studentName.trim())
      next.studentName = "Student name is required";
    if (!formData.parentName.trim())
      next.parentName = "Parent name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      next.email = "Enter a valid email address";
    if (!formData.mobile.trim()) next.mobile = "Mobile number is required";
    else if (formData.mobile.length < country.maxLen)
      next.mobile = `Enter a valid ${country.maxLen}-digit number`;
    if (needsClass && !formData.targetClass)
      next.targetClass = "Please select a class";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      await submitLead({
        name: formData.studentName,
        guardian_name: formData.parentName,
        email: formData.email,
        phone: `${country.code}${formData.mobile}`,
        course: formData.targetClass || undefined,
        campus: NIMT_BEACON_CAMPUS,
        message: [
          config.noteTag,
          formData.targetClass ? `Class: ${formData.targetClass}` : null,
        ]
          .filter(Boolean)
          .join(" | "),
      });

      // Fire Meta Pixel Lead event with intent context.
      window.fbq?.("track", "Lead", {
        content_name: intent,
        content_category: "NIMT Beacon School",
      });

      setSuccess(true);

      // Trigger file download if this intent has one attached.
      if (config.downloadUrl) {
        const link = document.createElement("a");
        link.href = asset(config.downloadUrl);
        link.target = "_blank";
        link.rel = "noopener";
        link.download = "";
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (err) {
      console.error("Lead submit error:", err);
      setServerError(
        "Something went wrong. Please try again or call us at +91 95999 31443."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-scale-up"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {success ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100">
                <CheckCircle className="h-9 w-9 stroke-[2.5]" />
              </div>
              <h3
                id="lead-modal-title"
                className="font-display text-2xl font-extrabold text-slate-900"
              >
                {config.successTitle}
              </h3>
              <p className="mt-3 text-base font-medium text-slate-600 leading-relaxed max-w-sm mx-auto">
                {config.successMessage}
              </p>
              {isDownload && (
                <a
                  href={asset(config.downloadUrl)}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1344e6] px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download didn't start? Click here</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="mt-6 block mx-auto text-sm font-bold tracking-wider text-[#1344e6] hover:underline uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-3 mb-6 pr-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1344e6]">
                  {config.icon}
                </div>
                <div>
                  <h3
                    id="lead-modal-title"
                    className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight"
                  >
                    {config.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-slate-500 leading-snug">
                    {config.subtitle}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Student name */}
                <Field
                  label="Student Name"
                  name="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Full name"
                  error={errors.studentName}
                />

                {/* Parent name */}
                <Field
                  label="Parent Name"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Full name"
                  error={errors.parentName}
                />

                {/* Email */}
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  error={errors.email}
                />

                {/* Mobile with country picker */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-800">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div
                    ref={countryMenuRef}
                    className={`relative flex items-stretch rounded-xl border bg-white transition-all overflow-visible ${
                      errors.mobile
                        ? "border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-100"
                        : "border-slate-200 focus-within:border-[#1344e6] focus-within:ring-1 focus-within:ring-blue-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setCountryOpen((v) => !v)}
                      className="flex items-center gap-1.5 pl-4 pr-2.5 border-r border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors rounded-l-xl"
                      aria-haspopup="listbox"
                      aria-expanded={countryOpen}
                    >
                      <span className="text-lg leading-none">
                        {country.flag}
                      </span>
                      <span className="text-sm font-bold text-slate-700">
                        {country.code}
                      </span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    </button>
                    <input
                      type="tel"
                      inputMode="numeric"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleMobileChange}
                      placeholder={`${country.maxLen}-digit number`}
                      className="flex-1 bg-transparent px-4 py-3.5 text-base font-semibold outline-none"
                    />

                    {countryOpen && (
                      <ul
                        role="listbox"
                        className="absolute left-0 top-full mt-1.5 z-10 max-h-60 w-64 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl py-1.5"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <li key={c.code}>
                            <button
                              type="button"
                              onClick={() => {
                                setCountry(c);
                                setCountryOpen(false);
                                setFormData((prev) => ({
                                  ...prev,
                                  mobile: prev.mobile.slice(0, c.maxLen),
                                }));
                              }}
                              className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm font-semibold text-left hover:bg-slate-50 cursor-pointer transition-colors ${
                                c.code === country.code
                                  ? "bg-blue-50 text-[#1344e6]"
                                  : "text-slate-700"
                              }`}
                            >
                              <span className="text-lg leading-none">
                                {c.flag}
                              </span>
                              <span className="flex-1">{c.name}</span>
                              <span className="text-slate-400 font-mono text-xs">
                                {c.code}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {errors.mobile && (
                    <span className="text-sm font-bold text-red-500">
                      {errors.mobile}
                    </span>
                  )}
                </div>

                {/* Class (admission + schedule-visit only) */}
                {needsClass && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-gray-800">
                      Applying for Class{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="targetClass"
                        value={formData.targetClass}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3.5 text-base font-semibold bg-white outline-none appearance-none cursor-pointer ${
                          errors.targetClass
                            ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                            : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                        }`}
                      >
                        <option value="">Select a class</option>
                        {CLASSES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    </div>
                    {errors.targetClass && (
                      <span className="text-sm font-bold text-red-500">
                        {errors.targetClass}
                      </span>
                    )}
                  </div>
                )}

                {serverError && (
                  <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm font-bold text-red-600">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1344e6] text-white py-4 font-bold text-base shadow-md hover:bg-blue-700 transition-colors disabled:opacity-70 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>{config.submitLabel}</span>
                  )}
                </button>

                <p className="text-xs font-semibold text-slate-400 text-center leading-relaxed">
                  By submitting, you agree to be contacted by NIMT Beacon
                  School about your inquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Small field helper ─────────────────────────────────────────────
function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-bold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3.5 text-base font-semibold outline-none transition-all ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100"
            : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
        }`}
      />
      {error && (
        <span className="text-sm font-bold text-red-500">{error}</span>
      )}
    </div>
  );
}
