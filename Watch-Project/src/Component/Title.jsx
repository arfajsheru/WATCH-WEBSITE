import React from "react";

const Title = ({title1, title2}) => {
  return (
<div className="mb-5 md:mb-3 flex items-center justify-center">
  <div className="w-fit relative text-center pb-1 font-font7 font-bold">
    <h1 className="text-xl sm:text-2xl lg:text-4xl uppercase font-medium text-gray-700">
      {title1}
      <span className="text-secondary">{title2}</span>
    </h1>
    {/* Border with 50% width */}
    <div className="absolute left-0 right-0 mx-auto bottom-0 border-b-2 border-secondary w-1/2"></div>
  </div>
</div>

  );
};

export default Title;
