import { useState, useEffect } from "react";

function App() {
  const [pressedKey, setPressedKey] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.startsWith("Arrow")) {
        setPressedKey(e.key);
        console.log(pressedKey);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pressedKey]);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 bg-red-500">
      <div className="playground relative w-3/4 h-2/3 bg-green-300 p-5 m-5 border-8 rounded-md border-black">
        <div className="target-box border-4 border-blue-400 border-dashed absolute h-20 w-20 right-5"></div>
        <div className="circle"></div>
      </div>

      <div>
        <div className="arrow-buttons grid grid-cols-3 grid-rows-3 gap-2">
          <button
            onClick={handleClick}
            className={`col-end-3 row-start-1 h-20 w-20 border-2 rounded-md border-black bg-slate-300 hover:bg-yellow-300 transition-transform duration-300 ${
              isClicked || pressedKey === "ArrowUp" ? "active:scale-75" : ""
            }`}
          >
            &uarr;
          </button>
          <button
            onClick={handleClick}
            className={`col-end-2 row-start-2 h-20 w-20 border-2 rounded-md border-black bg-slate-300 hover:bg-yellow-300 transition-transform duration-300 ${
              isClicked || pressedKey === "ArrowLeft" ? "active:scale-75" : ""
            }`}
          >
            &larr;
          </button>
          <button
            onClick={handleClick}
            className={`col-end-4 row-start-2 h-20 w-20 border-2 rounded-md border-black bg-slate-300 hover:bg-yellow-300 transition-transform duration-300  ${
              isClicked || pressedKey === "ArrowRight" ? "active:scale-75" : ""
            }`}
          >
            &rarr;
          </button>
          <button
            onClick={handleClick}
            className={`col-end-3 row-start-3 h-20 w-20 border-2 rounded-md border-black bg-slate-300 hover:bg-yellow-300 transition-transform duration-300  ${
              isClicked || pressedKey === "ArrowDown" ? "active:scale-75" : ""
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
