import React from "react";
import Section from "../components/Section";

const MyMission = () => {
  return (
    <Section>
      <div className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-slate-900 leading-none mb-6 sm:mb-8">
              My Mission
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-slate-400 to-transparent mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-8">
              <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-light text-slate-600 tracking-wide max-w-3xl mx-auto">
                I believe in taking the time to truly understand each patient's
                unique needs and concerns. Quality dental care isn't rushed—it's
                thoughtful, gentle, and built on trust.
              </p>

              <p className="text-lg sm:text-xl leading-relaxed font-light text-slate-600 tracking-wide max-w-2xl mx-auto">
                Every treatment begins with listening, because when patients
                feel heard and comfortable, healing happens naturally.
              </p>
            </div>

            {/* Mission Quote */}
            <blockquote className="relative">
              <div className="absolute -left-1 sm:-left-2 top-0 text-4xl sm:text-5xl md:text-6xl text-slate-300 font-serif leading-none">
                "
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-slate-700 leading-relaxed pl-6 sm:pl-8 pr-2 sm:pr-4">
                When patients leave my office feeling confident and cared for, I
                know I've fulfilled my purpose as both a dentist and a healer.
              </p>
              <footer className="text-right mt-4 sm:mt-6 text-sm sm:text-base text-slate-500 font-medium not-italic tracking-wide">
                — Dr. Kani
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MyMission;
