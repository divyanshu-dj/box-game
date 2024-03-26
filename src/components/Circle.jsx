import React from 'react';

const Circle = ({ circlePos }) => {
  return (
    <div
      className={`circle h-[25px] w-[25px] rounded-full bg-green-700 transition-transform duration-200 ease-in-out absolute`}
      style={{ transform: `translate(${circlePos.x}px, ${circlePos.y}px)` }}
    ></div>
  );
};

export default Circle;