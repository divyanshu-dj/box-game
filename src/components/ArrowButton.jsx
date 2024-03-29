import React from "react";

const ArrowButton = ({
  pressedKey,
  setPressedKey,
  direction,
  reff
}) => {


  const emoji = (direction) => {
    switch (direction) {
      case "ArrowUp":
        return "↑";
      case "ArrowLeft":
        return "←";
      case "ArrowRight":
        return "→";
      case "ArrowDown":
        return "↓";
    }
  };

  const grid = (direction) => {
    switch (direction) {
      case "ArrowUp":
        return "row-start-1 col-start-2";
      case "ArrowLeft":
        return "row-start-2 col-start-1";
      case "ArrowRight":
        return "row-start-2 col-start-3";
      case "ArrowDown":
        return "row-start-3 col-start-2";
    }
  }
  
  
  return (
    <button
      ref={reff}
      onMouseDown={() => setPressedKey(direction)}
      onMouseUp={() => setPressedKey(null)}
      onTouchStart={() => setPressedKey(direction)}
      onTouchEnd={() => setPressedKey(null)}
      className={`${grid(direction)} min-h-10 min-w-10 border-2 rounded-md border-black bg-slate-300  transition-transform duration-300 active:scale-75 active:bg-yellow-300 ${
        pressedKey === direction ? "scale-90 bg-yellow-300" : ""}`}
    >
      {emoji(direction)}
    </button>
  );
};

export default ArrowButton;
