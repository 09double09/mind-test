import React from "react";

const TopContent = ({ children,marginTop }) => {
  return (
    <div className={`w-80/100 h-70 bg-zinc-300/40 rounded shadow-[1px_9px_59.29999923706055px_27px_rgba(0,0,0,0.25)] ${marginTop}`}>
      {children}
    </div>
  );
};

export default TopContent;
