import React from "react";

const Section = ({ children }) => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Section;
