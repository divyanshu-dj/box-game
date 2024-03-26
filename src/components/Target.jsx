import React from 'react';

const Target = ({ targetDiv, success }) => {
  return (
    <div
      ref={targetDiv}
      className={`target-box border-4 border-blue-400 border-dashed absolute h-[150px] w-[150px] top-[20px] right-[20px] ${
        success ? "bg-red-700" : ""
      }`}
    ></div>
  );
};

export default Target;