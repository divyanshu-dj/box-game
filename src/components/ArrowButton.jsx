import React from "react";

const ArrowButton = ({
  pressedKey,
  setPressedKey,
  direction,
  positionInGrid,
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
  
  return (
    <button
      onMouseDown={() => setPressedKey(direction)}
      onMouseUp={() => setPressedKey(null)}
      onTouchStart={() => setPressedKey(direction)}
      onTouchEnd={() => setPressedKey(null)}
      className={`row-start-${positionInGrid.row} col-start-${positionInGrid.col} min-h-10 min-w-10 border-2 rounded-md border-black bg-slate-300  transition-transform duration-300 active:scale-75 active:bg-yellow-300 ${
        pressedKey === direction ? "scale-75 bg-yellow-300" : ""}`}
    >
      {emoji(direction)}
    </button>
  );
};

export default ArrowButton;
