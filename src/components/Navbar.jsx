import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Spacer div that takes up the same height as the navbar */}
      <div className="h-[4rem]"></div>

      {/* Fixed navbar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-100/50 shadow-sm fixed top-0 w-full z-50 h-[4rem]">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          <div className="flex-shrink-0">
            <a className="btn btn-ghost text-xl font-light tracking-wide text-slate-800 hover:text-slate-600 transition-colors duration-200">
              Dr. Kani
            </a>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-2">
              <li>
                <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg px-4 py-2">
                  Home
                </a>
              </li>
              <li>
                <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg px-4 py-2">
                  My Mission
                </a>
              </li>
              <li>
                <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg px-4 py-2">
                  Before & Afters
                </a>
              </li>
              <li>
                <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 transition-all duration-200 rounded-lg px-4 py-2 border border-transparent hover:border-slate-200">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 lg:hidden">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-slate-50 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-white/95 backdrop-blur-md rounded-2xl z-50 mt-2 w-screen p-8 shadow-lg border border-slate-100/50"
              >
                <li className="mb-4">
                  <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg px-6 py-4 text-lg">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg px-6 py-4 text-lg">
                    My Mission
                  </a>
                </li>
                <li className="mb-4">
                  <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg px-6 py-4 text-lg">
                    Before & Afters
                  </a>
                </li>
                <li>
                  <a className="font-light text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 transition-all duration-200 rounded-lg px-6 py-4 text-lg border border-transparent hover:border-slate-200">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
