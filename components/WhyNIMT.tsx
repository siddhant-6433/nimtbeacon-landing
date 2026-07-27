import React from "react";

interface FacilityItem {
  image: string;
  name: string;
}

export default function CampusFacilities() {
  const facilities: FacilityItem[] = [
    { image: "/images/facilities/campus.jpg", name: "Campus" },
    { image: "/hostel.webp", name: "Hostel" },
    { image: "/lab.webp", name: "Labs" },
    { image: "/play.webp", name: "Sports" },
    { image: "/library.webp", name: "Library" },
  
  ];

  return (
    <section
      id="facilities"
      className="bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#1344e6]">
            Campus Life & Infrastructure
          </span>

          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Why Parents Trust NIMT Beacon School
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed">
            A secure, nurturing, and future-ready boarding environment where
            students grow academically, physically, socially, and emotionally.
          </p>
        </div>

        {/* Premium Featured Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured Campus Card */}
            <div className="lg:col-span-6">
              <div className="group relative h-[500px] overflow-hidden rounded-[32px] shadow-xl">
                <img
                  src="/campus.webp"
                  alt="Campus"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                    Featured Facility
                  </span>

                  <h3 className="mt-4 text-4xl font-bold text-white">
                    World-Class Campus
                  </h3>

                  <p className="mt-3 max-w-md text-white/90 text-lg">
                    A safe, green and inspiring learning environment designed
                    for holistic development.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6 h-full">
                {facilities.slice(1, 5).map((facility, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[28px] shadow-lg h-[238px]"
                  >
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <h3 className="text-white text-xl font-bold">
                        {facility.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining Facilities */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.slice(5).map((facility, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] shadow-lg h-[280px]"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-xl font-bold">
                    {facility.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Infrastructure Banner */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#1344e6] via-blue-600 to-indigo-700 px-8 py-12 md:px-14 md:py-16 shadow-2xl">
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                Modern Infrastructure
              </span>

              <h3 className="mt-5 text-3xl md:text-5xl font-bold text-white">
                Built for Future Leaders
              </h3>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-blue-100 text-lg leading-relaxed">
                  Our campus spans over lush green surroundings with smart
                  classrooms, modern residential facilities, advanced
                  laboratories, sports infrastructure, and dedicated activity
                  zones.
                </p>

                <p className="text-blue-100 text-lg leading-relaxed">
                  Every corner of the campus is designed to promote safety,
                  innovation, discipline, creativity, and all-round
                  development for every student.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Images */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Main Campus */}
          <div className="lg:col-span-8">
            <div className="group relative overflow-hidden rounded-[32px] shadow-xl">
              <img
                src="/campus1.webp"
                alt="Main Campus"
                className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h4 className="text-3xl font-bold text-white">
                  Main Campus View
                </h4>

                <p className="mt-2 text-white/90 text-lg">
                  Spacious, secure, and designed for academic excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Sports Complex */}
          <div className="lg:col-span-4">
            <div className="group relative overflow-hidden rounded-[32px] shadow-xl h-[500px]">
              <img
                src="/sports.webp"
                alt="Sports Complex"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h4 className="text-2xl font-bold text-white">
                  Sports Complex
                </h4>

                <p className="mt-2 text-white/90">
                  Encouraging fitness, teamwork and leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}