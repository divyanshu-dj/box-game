import { useState, useEffect, useRef } from "react";

function App() {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [success, setSuccess] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);
  const outerDivRef = useRef(null);
  const innerDivRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.startsWith("Arrow")) {
        setPressedKey(e.key);
      }
    };
    const handleKeyUp = (e) => {
      if (e.key.startsWith("Arrow")) {
        setPressedKey(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const movement = 10; // Amount of pixels to move

    const handleMovement = () => {
      if (pressedKey) {
        switch (pressedKey) {
          case 'ArrowUp':
            setCirclePos((prevPosition) => ({ ...prevPosition, y: prevPosition.y - movement >= 0 ? prevPosition.y - movement : prevPosition.y }));
            break;
          case 'ArrowDown':
            setCirclePos((prevPosition) => ({ ...prevPosition, y: prevPosition.y + movement <= 410 ? prevPosition.y + movement : prevPosition.y }));
            break;
          case 'ArrowLeft':
            setCirclePos((prevPosition) => ({ ...prevPosition, x: prevPosition.x - movement >= 0 ? prevPosition.x - movement : prevPosition.x }));
            break;
          case 'ArrowRight':
            setCirclePos((prevPosition) => ({ ...prevPosition, x: prevPosition.x + movement < 970 ? prevPosition.x + movement : prevPosition.x }));
            break;
        }
      }
    };

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [pressedKey]);


  useEffect(() => {
    const generateRandomNumber = (min, max) => {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomValue;
    };

    const newY = generateRandomNumber(0,410);
    const newX = generateRandomNumber(0, 970);

    setCirclePos({x:newX, y:newY});
  }, []);

  

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 bg-red-500">
      <div ref={outerDivRef} className="playground relative w-[1000px] h-[500px] bg-green-300 m-5 border-8 rounded-md border-black">
        <div ref={innerDivRef} className="target-box mt-5 border-4 border-blue-400 border-dashed absolute h-[150px] w-[150px] right-5"></div>
        <div
          className="circle h-[25px] w-[25px] rounded-full bg-green-700 transition-transform duration-200 ease-in-out absolute"
          style={{ transform: `translate(${circlePos.x}px, ${circlePos.y}px)` }}
        ></div>
      </div>

      <div>
        <div className="arrow-buttons grid grid-cols-3 grid-rows-3 gap-1">
          <button
            onMouseDown={() => setPressedKey("ArrowUp")}
            onMouseUp={() => setPressedKey(null)}
            className={`col-end-3 row-start-1 h-20 w-20 border-2 rounded-md border-black bg-slate-300  transition-transform duration-300 active:scale-75 active:bg-yellow-300 ${
              pressedKey === "ArrowUp" ? "scale-75 bg-yellow-300" : ""
            }`}
          >
            &uarr;
          </button>
          <button
            onMouseDown={() => setPressedKey("ArrowLeft")}
            onMouseUp={() => setPressedKey(null)}
            className={`col-end-2 row-start-2 h-20 w-20 border-2 rounded-md border-black bg-slate-300  transition-transform duration-300 active:scale-75 active:bg-yellow-300 ${
              pressedKey === "ArrowLeft" ? "scale-75 bg-yellow-300" : ""
            }`}
          >
            &larr;
          </button>
          <button
            onMouseDown={() => setPressedKey("ArrowRight")}
            onMouseUp={() => setPressedKey(null)}
            className={`col-end-4 row-start-2 h-20 w-20 border-2 rounded-md border-black bg-slate-300  transition-transform duration-300 active:scale-75 active:bg-yellow-300  ${
              pressedKey === "ArrowRight" ? "scale-75 bg-yellow-300" : ""
            }`}
          >
            &rarr;
          </button>
          <button
            onMouseDown={() => setPressedKey("ArrowDown")}
            onMouseUp={() => setPressedKey(null)}
            className={`col-end-3 row-start-3 h-20 w-20 border-2 rounded-md border-black bg-slate-300  transition-transform duration-300 active:scale-75 active:bg-yellow-300  ${
              pressedKey === "ArrowDown" ? "scale-75 bg-yellow-300" : ""
            }`}
          >
            &darr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;





