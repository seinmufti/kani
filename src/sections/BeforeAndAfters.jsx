import React from "react";
import Section from "../components/Section";

const BeforeandAfters = () => {
  const cases = [
    {
      id: 1,
      title: "Smile Restoration",
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
    },
    {
      id: 2,
      title: "Teeth Whitening",
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
    },
    {
      id: 3,
      title: "Complete Makeover",
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
    },
  ];

  return (
    <Section>
      <div className="bg-gradient-to-br from-slate-300 via-gray-200 to-slate-100 px-4 sm:px-6 md:px-12 py-16 sm:py-20 lg:py-24 w-full min-h-[calc(100vh-4rem)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-slate-900 leading-none mb-6 sm:mb-8">
              Before & Afters
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-slate-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl leading-relaxed font-light text-slate-600 tracking-wide max-w-2xl mx-auto">
              Real transformations that showcase the power of personalized
              dental care
            </p>
          </div>

          {/* Mobile Carousel / Desktop Grid */}
          <div className="lg:hidden">
            {/* Mobile Carousel */}
            <div className="carousel w-full">
              {cases.map((case_item, index) => (
                <div
                  key={case_item.id}
                  id={`slide${index + 1}`}
                  className="carousel-item w-full justify-center"
                >
                  <div className="space-y-4 w-full max-w-sm mx-auto">
                    <figure
                      className="diff aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 bg-white w-full"
                      tabIndex={0}
                    >
                      <div className="diff-item-1" role="img" tabIndex={0}>
                        <img
                          alt={`${case_item.title} - Before`}
                          src={case_item.before}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="diff-item-2" role="img">
                        <img
                          alt={`${case_item.title} - After`}
                          src={case_item.after}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="diff-resizer"></div>
                    </figure>

                    <div className="text-center">
                      <h3 className="text-lg font-light text-slate-800 mb-2">
                        {case_item.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-light">
                        Drag the slider to see the transformation
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel Indicators */}
            <div className="flex justify-center py-4 gap-2 mt-6">
              {cases.map((_, index) => (
                <a
                  key={index}
                  href={`#slide${index + 1}`}
                  className="w-3 h-3 rounded-full bg-slate-300 hover:bg-slate-500 transition-colors duration-200"
                ></a>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:flex justify-between gap-6">
            {cases.map((case_item) => (
              <div
                key={case_item.id}
                className="space-y-4 w-[calc(33.333%-1rem)]"
              >
                <figure
                  className="diff aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 bg-white w-full"
                  tabIndex={0}
                >
                  <div className="diff-item-1" role="img" tabIndex={0}>
                    <img
                      alt={`${case_item.title} - Before`}
                      src={case_item.before}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="diff-item-2" role="img">
                    <img
                      alt={`${case_item.title} - After`}
                      src={case_item.after}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="diff-resizer"></div>
                </figure>

                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-light text-slate-800 mb-2">
                    {case_item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light">
                    Drag the slider to see the transformation
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeforeandAfters;
