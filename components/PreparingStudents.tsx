import React from "react";

interface PrepItem {
  image: string;
  label: string;
}

export default function PreparingStudents() {
  const items: PrepItem[] = [
    {
      image: "/smart-classroom.webp",
      label: "Smart Classrooms",
    },
    {
      image: "/computer-lab.webp",
      label: "Computer Lab",
    },
    {
      image: "/physics-lab.webp",
      label: "Physics Lab",
    },
    {
      image: "/chemistry-lab.webp",
      label: "Chemistry Lab",
    },
    {
      image: "/bio-lab.webp",
      label: "Biology Lab",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Preparing Students for Life, Not Just Exams
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Future-Ready Education with world-class infrastructure and
            comprehensive skill development.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

          {items.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {item.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Blue Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1344e6] to-blue-700 px-8 py-12 text-white shadow-xl">

            <div className="absolute right-0 top-0 h-40 w-40 bg-white/5 blur-3xl rounded-full"></div>

            <div className="max-w-4xl text-left">
              <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
                Comprehensive Development
              </h3>

              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-blue-100">
                We believe in nurturing well-rounded individuals equipped with
                academic knowledge, practical skills, and strong character.
                Our programs are designed to prepare students not just for
                competitive exams, but for success in life.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}