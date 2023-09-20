import React from "react";
import Calculator from "./Components/Calculator/calculator";

const page = () => {
  return (
    <div>
      <div className="text-center pt-20">
        CODSoft Web development Task-3
        <span className="text-red-500 pl-2">Calculator</span>
      </div>
      <div className="flex justify-center items-center pt-20">
        <Calculator />
      </div>
    </div>
  );
};

export default page;
