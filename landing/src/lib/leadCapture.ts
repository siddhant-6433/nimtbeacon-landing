// UniOs CRM lead-ingest integration.
// The edge function accepts the public anon key in the `apikey` header.
const UNIOS_LEAD_ENDPOINT =
  "https://deylhigsisuexszsmypq.supabase.co/functions/v1/lead-ingest?source=website";

const UNIOS_ANON_KEY = "sb_publishable_pgYgbNk-tiiQRN3Ll6wDiw_zg8zVHuO";

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  guardian_name?: string;
  /** Display name of the class chosen in the form, e.g. "Class 8". */
  course?: string;
  campus?: string;
  message?: string;
}

// Maps the friendly class label users pick in the form to the actual course
// name in UniOs (which uses Roman numerals for grades + literal names for
// pre-primary). Sending the exact course name lets the lead-ingest function
// resolve course_id deterministically when combined with the campus filter.
const COURSE_NAME_MAP: Record<string, string> = {
  "Pre Nursery": "Toddlers",
  Nursery: "Nursery",
  LKG: "LKG",
  UKG: "UKG",
  "Class 1": "Grade I",
  "Class 2": "Grade II",
  "Class 3": "Grade III",
  "Class 4": "Grade IV",
  "Class 5": "Grade V",
  "Class 6": "Grade VI",
  "Class 7": "Grade VII",
  "Class 8": "Grade VIII",
  "Class 9": "Grade IX",
  "Class 10": "Grade X",
  "Class 11 - Science (PCM)": "Grade XI",
  "Class 11 - Science (PCB)": "Grade XI",
  "Class 11 - Commerce": "Grade XI",
  "Class 11 - Humanities": "Grade XI",
  "Class 12 - Science (PCM)": "Grade XII",
  "Class 12 - Science (PCB)": "Grade XII",
  "Class 12 - Commerce": "Grade XII",
  "Class 12 - Humanities": "Grade XII",
};

export function mapCourseName(label: string | undefined): string | undefined {
  if (!label) return undefined;
  return COURSE_NAME_MAP[label] || label;
}

// NIMT Beacon School lives on the "Avantika II" campus. Using the exact
// suffix avoids matching the older "Avantika" (without II) campus.
export const NIMT_BEACON_CAMPUS = "Avantika II";

export interface LeadResponse {
  status: "created" | "duplicate";
  lead?: { id: string };
  lead_id?: string;
}

function getUtmParams(): Record<string, string | null> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    gclid: params.get("gclid"),
  };
}

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const body = {
    ...payload,
    course: mapCourseName(payload.course),
    campus: payload.campus || NIMT_BEACON_CAMPUS,
    landing_page:
      typeof window !== "undefined" ? window.location.href : undefined,
    referrer:
      typeof document !== "undefined" ? document.referrer || undefined : undefined,
    origin_domain:
      typeof window !== "undefined" ? window.location.hostname : undefined,
    ...getUtmParams(),
  };

  const res = await fetch(UNIOS_LEAD_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: UNIOS_ANON_KEY,
      Authorization: `Bearer ${UNIOS_ANON_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message =
      data?.error || data?.message || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return data;
}

// Country code list, India default. Order = display order in dropdown.
export const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India", maxLen: 10 },
  { code: "+971", flag: "🇦🇪", name: "UAE", maxLen: 9 },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia", maxLen: 9 },
  { code: "+65", flag: "🇸🇬", name: "Singapore", maxLen: 8 },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada", maxLen: 10 },
  { code: "+44", flag: "🇬🇧", name: "UK", maxLen: 10 },
  { code: "+61", flag: "🇦🇺", name: "Australia", maxLen: 9 },
  { code: "+977", flag: "🇳🇵", name: "Nepal", maxLen: 10 },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh", maxLen: 10 },
  { code: "+974", flag: "🇶🇦", name: "Qatar", maxLen: 8 },
  { code: "+968", flag: "🇴🇲", name: "Oman", maxLen: 8 },
  { code: "+965", flag: "🇰🇼", name: "Kuwait", maxLen: 8 },
] as const;

export type CountryCode = (typeof COUNTRY_CODES)[number];
