import React from "react";
import {
  CalendarDays,
  FileDown,
  ClipboardList,
  Package,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { useLeadModal, type LeadIntent } from "./LeadModal";

interface Action {
  intent: LeadIntent;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const ACTIONS: Action[] = [
  {
    intent: "schedule-visit",
    label: "Schedule Campus Visit",
    description: "Tour the campus & meet our faculty in person.",
    icon: <CalendarDays className="h-6 w-6" />,
  },
  {
    intent: "download-brochure",
    label: "Download Brochure",
    description: "Full school prospectus, academics & fees.",
    icon: <FileDown className="h-6 w-6" />,
  },
  {
    intent: "download-hostel-schedule",
    label: "Download Hostel Schedule",
    description: "A day-in-the-life: wake-up to lights-out.",
    icon: <ClipboardList className="h-6 w-6" />,
  },
  {
    intent: "download-hostel-pack",
    label: "Download Hostel Pack List",
    description: "Complete packing checklist for new boarders.",
    icon: <Package className="h-6 w-6" />,
  },
  {
    intent: "speak-to-counsellor",
    label: "Speak to a Counsellor",
    description: "15-min call to discuss admissions & fees.",
    icon: <Headphones className="h-6 w-6" />,
  },
];

export default function QuickActions() {
  const { open } = useLeadModal();

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#1344e6]">
            Quick Actions
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Everything You Need, One Click Away
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Pick any option below — we'll send the resource straight to your
            inbox and have an admissions counsellor follow up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ACTIONS.map((action) => (
            <button
              key={action.intent}
              onClick={() => open(action.intent)}
              className="group relative flex flex-col items-start text-left rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#1344e6] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1344e6]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1344e6] group-hover:bg-[#1344e6] group-hover:text-white transition-colors">
                {action.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-extrabold text-slate-900 leading-tight">
                {action.label}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500 leading-relaxed">
                {action.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#1344e6] group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
