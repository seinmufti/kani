import React from "react";
import Section from "./Section";

const Contact = () => {
  return (
    <Section>
      <div className=" px-4 sm:px-6 md:px-12 py-16 sm:py-20 lg:py-18 w-full h-full">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-15">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-slate-900 leading-none mb-6 sm:mb-8">
              Contact
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-slate-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl leading-relaxed font-light text-slate-600 tracking-wide max-w-2xl mx-auto">
              Ready to transform your smile? Let's connect and start your
              journey to better oral health
            </p>
          </div>

          {/* Two-part horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Location Card */}
            <div className="card bg-white/70 backdrop-blur-sm shadow-xl border border-slate-200/50 h-fit">
              <div className="card-body p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-wide">
                    Our Location
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800 text-lg">
                      Practice Address
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      123 Dental Plaza
                      <br />
                      Suite 200
                      <br />
                      Erbil, Kurdistan Region
                      <br />
                      Iraq 44001
                    </p>
                  </div>

                  <div className="divider my-6 opacity-30"></div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-800 text-lg">
                      Office Hours
                    </h4>
                    <div className="space-y-2 text-slate-600 font-light">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Card Style Contact Info */}
            <div className="card bg-white/70 backdrop-blur-sm shadow-xl border border-slate-200/50 h-fit">
              <div className="card-body p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-wide">
                    Get In Touch
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Contact Methods */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Phone</p>
                        <p className="text-slate-600 font-light">
                          +964 750 123 4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Email</p>
                        <p className="text-slate-600 font-light">
                          dr.kani@dentalcare.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Website</p>
                        <p className="text-slate-600 font-light">
                          www.drkani.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="divider my-6 opacity-30"></div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <button className="btn btn-lg bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10M5 9h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z"
                        />
                      </svg>
                      Schedule Appointment
                    </button>
                    <p className="text-sm text-slate-500 font-light mt-3">
                      Same-day appointments available for emergencies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
