import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Loader2, ChevronDown } from "lucide-react";
import {
  COUNTRY_CODES,
  NIMT_BEACON_CAMPUS,
  submitLead,
  type CountryCode,
} from "../lib/leadCapture";

declare global {
  interface Window {
    fbq?: (
      event: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    mobile: "",
    targetClass: "",
  });

  const [country, setCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string>("");

  const countryMenuRef = useRef<HTMLDivElement | null>(null);

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

  const classes = [
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim())
      newErrors.studentName = "Student Name is required";
    if (!formData.parentName.trim())
      newErrors.parentName = "Parent Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile Number is required";
    else if (formData.mobile.length < country.maxLen)
      newErrors.mobile = `Enter a valid ${country.maxLen}-digit number`;
    if (!formData.targetClass)
      newErrors.targetClass = "Selecting school grade is mandatory";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, country.maxLen);
    setFormData((prev) => ({ ...prev, mobile: digits }));
    if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitLead({
        name: formData.studentName,
        guardian_name: formData.parentName,
        email: formData.email,
        phone: `${country.code}${formData.mobile}`,
        course: formData.targetClass,
        campus: NIMT_BEACON_CAMPUS,
        message: `Source: Inline admission form (landing page) | Class: ${formData.targetClass}`,
      });

      window.fbq?.("track", "Lead", {
        content_name: "admission",
        content_category: "NIMT Beacon School",
      });

      const id =
        res.lead?.id?.slice(0, 8) || res.lead_id?.slice(0, 8) || "PENDING";
      setRefId(id.toUpperCase());
      setIsSuccess(true);
    } catch (err) {
      console.error("Lead submit error:", err);
      setServerError(
        "Something went wrong. Please try again or call us at +91 95999 31443."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="admissions"
      className="bg-white py-20 border-t border-slate-100 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Inquiry for Admission
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Fill out the form below to inquire about admission to NIMT Beacon
            School
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow relative">
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center text-center animate-scale-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100 shadow-inner mb-6">
                  <CheckCircle className="h-10 w-10 stroke-[2.5]" />
                </div>

                <h3 className="font-display text-3xl font-extrabold text-[#1344e6]">
                  Inquiry Submitted!
                </h3>
                <p className="mt-4 text-base font-semibold text-slate-600 max-w-md leading-relaxed">
                  Thank you, <strong>{formData.parentName}</strong>. We've
                  received your inquiry for <strong>{formData.studentName}</strong>{" "}
                  (applying for {formData.targetClass}).
                </p>

                <div className="mt-8 rounded-xl bg-slate-50 border border-slate-100 px-6 py-5 text-sm text-slate-500 font-mono tracking-wide">
                  <span>Reference ID: NIMT-{refId}</span>
                  <div className="mt-2 font-bold text-slate-600">
                    A counsellor will contact you on {country.code}{" "}
                    {formData.mobile} within 24 hours.
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      studentName: "",
                      parentName: "",
                      email: "",
                      mobile: "",
                      targetClass: "",
                    });
                  }}
                  className="mt-8 text-sm font-extrabold tracking-widest text-[#1344e6] hover:underline uppercase block cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 text-left">
                {/* Student Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-800 font-display">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter student name"
                    className={`w-full rounded-xl border px-5 py-3.5 text-base font-semibold transition-all outline-none ${
                      errors.studentName
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.studentName && (
                    <span className="text-sm font-bold text-red-500">
                      {errors.studentName}
                    </span>
                  )}
                </div>

                {/* Parent Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-800 font-display">
                    Parent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter parent name"
                    className={`w-full rounded-xl border px-5 py-3.5 text-base font-semibold transition-all outline-none ${
                      errors.parentName
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.parentName && (
                    <span className="text-sm font-bold text-red-500">
                      {errors.parentName}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-800 font-display">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className={`w-full rounded-xl border px-5 py-3.5 text-base font-semibold transition-all outline-none ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                        : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-sm font-bold text-red-500">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Mobile Number with country code picker */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-800 font-display">
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
                      className="flex items-center gap-1.5 pl-5 pr-3 border-r border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors rounded-l-xl"
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
                      className="flex-1 bg-transparent px-5 py-3.5 text-base font-semibold outline-none"
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

                {/* Applying for Class */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-800 font-display">
                    Applying for Class <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="targetClass"
                      value={formData.targetClass}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border px-5 py-3.5 text-base font-semibold bg-white transition-all outline-none appearance-none cursor-pointer ${
                        errors.targetClass
                          ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                          : "border-slate-200 focus:border-[#1344e6] focus:ring-1 focus:ring-blue-100"
                      }`}
                    >
                      <option value="">Select a class</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
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

                {serverError && (
                  <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm font-bold text-red-600">
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1344e6] text-white py-4.5 font-bold text-base shadow-md hover:bg-blue-700 transition-colors disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </button>

                <span className="block text-xs font-bold text-gray-400 text-center leading-relaxed mt-2">
                  By submitting this form, you agree to be contacted by NIMT
                  Beacon School regarding your inquiry.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
