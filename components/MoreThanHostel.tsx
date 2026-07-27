import React from "react";

interface BulletItem {
  num: number;
  boldText: string;
  regularText: string;
}

export default function MoreThanHostel() {
  const points: BulletItem[] = [
    {
      num: 1,
      boldText: "Care",
      regularText: "Every student receives individualized attention and support from our dedicated team.",
    },
    {
      num: 2,
      boldText: "Emotional Support",
      regularText: "We understand boarding can be challenging. Our counselors are always available.",
    },
    {
      num: 3,
      boldText: "Student Wellbeing",
      regularText: "Physical, mental, and emotional health are our top priorities.",
    },
    {
      num: 4,
      boldText: "Resident Mentors",
      regularText: "Experienced mentors guide students in academics and personal development.",
    },
    {
      num: 5,
      boldText: "Safe Environment",
      regularText: "A nurturing atmosphere where students feel secure and valued.",
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          
          {/* Left Block with Bullets */}
          <div className="flex flex-col justify-center text-left lg:col-span-7">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              More Than a Hostel. <br />
              <span className="text-[#1344e6]">A Home Away From Home.</span>
            </h2>
            
            <div className="mt-8 space-y-6 max-w-xl">
              {points.map((pt) => (
                <div key={pt.num} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-extrabold text-[#1344e6] border border-blue-100 mt-1">
                    {pt.num}
                  </div>
                  <div className="text-base md:text-lg">
                    <span className="font-bold text-gray-900">{pt.boldText}:</span>{" "}
                    <span className="font-medium text-slate-600 leading-relaxed">{pt.regularText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block Mosaic Cards matching Page 2 layout */}
 <div className="lg:col-span-5 flex flex-col gap-5">

  {/* Hostel Rooms Image */}
  <div className="relative overflow-hidden rounded-3xl shadow-lg group">
    <img
      src="/hostel-room.webp"
      alt="Hostel Rooms"
      className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

    <div className="absolute bottom-5 left-5">
      <span className="text-white text-xl font-bold font-display">
        Hostel Rooms
      </span>
    </div>
  </div>

  {/* Students Bonding Image */}
  <div className="relative overflow-hidden rounded-3xl shadow-lg group">
    <img
      src="/students-bonding.webp"
      alt="Students Bonding"
      className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

    <div className="absolute bottom-5 left-5">
      <span className="text-white text-xl font-bold font-display">
        Library of Knowledge
      </span>
    </div>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}
