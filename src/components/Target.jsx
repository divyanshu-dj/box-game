import React from 'react';

const Target = ({ targetDiv, success }) => {
  return (
    <div
      ref={targetDiv}
      className={`target-box border-4 border-blue-400 border-dashed absolute right-0 h-[100px] w-[100px] ${
        success ? "bg-red-700" : ""
      }`}
    ></div>
  );
};

export default Target;