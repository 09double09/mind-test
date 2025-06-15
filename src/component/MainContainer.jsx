import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className=" w-100/100 h-90/100 z-10">
      {children}
    </div>
  );
};

export default MainContainer;
