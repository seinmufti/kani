import React from "react";
import portrait from "@/assets/portrait.jpg";
import Section from "../components/Section";

export const Hero = () => {
  return (
    <Section>
      <div className="hero bg-gradient-to-br from-slate-500 via-gray-200 to-slate-50 max-w-full h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-12 py-8 sm:py-12 lg:py-0">
        <div className="hero-content flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 lg:gap-16 xl:gap-24 h-full items-center justify-center lg:justify-start">
          {/* Portrait - optimized for mobile */}
          <div className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[85vh] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:ml-auto xl:ml-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl order-1 lg:order-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-10 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
            <img
              src={portrait}
              alt="Portrait of Dr. Kani"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content - optimized for mobile */}
          <div className="lg:flex-1 lg:max-w-2xl order-2 lg:order-none">
            {/* Main content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tighter text-slate-900 leading-none">
                  Dr. Kani
                  <span className="block lg:inline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-slate-600 lg:ml-6 mt-1 sm:mt-2 lg:mt-0">
                    DDS
                  </span>
                </h1>
                <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-slate-400 to-transparent mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-extralight text-slate-600 max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 tracking-wide px-2 sm:px-0">
                Bringing smiles to life with compassion and expertise
              </p>
            </div>

            {/* Quote - mobile optimized */}
            <blockquote className="mt-14 sm:mt-10 md:mt-12 lg:mt-50 relative px-2 sm:px-0">
              <div className="absolute -left-1 sm:-left-2 top-0 text-4xl sm:text-5xl md:text-6xl text-slate-300 font-serif leading-none">
                "
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light italic text-slate-700 leading-relaxed pl-6 sm:pl-8 pr-2 sm:pr-4">
                A smile is a curve that sets everything straight.
              </p>
              <footer className="text-right mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-500 font-medium not-italic tracking-wide pr-2 sm:pr-0">
                — Phyllis Diller
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
};
