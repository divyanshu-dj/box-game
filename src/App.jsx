import { useState, useEffect, useRef } from "react";
import ArrowButtonGrid from "./components/ArrowButtonGrid";
import Circle from "./components/Circle";
import SuccessMessage from "./components/SuccessMessage";
import Target from "./components/Target";

function App() {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [success, setSuccess] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);
  const playgroundBorder = 4;
  const playgroundDiv = useRef(null);
  const targetDiv = useRef(null);

  //KEYBOARD(pressedKey)
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


  //CIRCLE POSITION CHANGE(pressedKey, circlePos)
  useEffect(() => {
    const movement = 10;
    const handleMovement = () => {
      if (pressedKey) {
        switch (pressedKey) {
          case "ArrowUp":
            setCirclePos((prevPosition) => ({
              ...prevPosition,
              y: Math.max(prevPosition.y - movement, 0),
            }));
            break;
          case "ArrowDown":
            setCirclePos((prevPosition) => ({
              ...prevPosition,
              y: Math.min(prevPosition.y + movement, playgroundDiv.current.clientHeight - 2 * 4 - 25/2),
            }));
            break;
          case "ArrowLeft":
            setCirclePos((prevPosition) => ({
              ...prevPosition,
              x: Math.max(prevPosition.x - movement, 0),
            }));
            break;
          case "ArrowRight":
            setCirclePos((prevPosition) => ({
              ...prevPosition,
              x: Math.min(prevPosition.x + movement, playgroundDiv.current.clientWidth - ( 2 * 4 ) - 25/2),
            }));
            break;
          default:
            break;
        }
      }
    };

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [pressedKey]);


  // RANDOM SPAWN CIRCLE(playground, circlePos)
  useEffect(() => {
    const generateRandomNumber = (min, max, excludedMin, excludedMax) => {
      let randomValue;
      do {
        randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (randomValue >= excludedMin && randomValue <= excludedMax);
      return randomValue;
    };

    const newY = generateRandomNumber(0, playgroundDiv.current.clientHeight - 2 * 4 - 25/2, 20, 170);
    const newX = generateRandomNumber(0, playgroundDiv.current.clientWidth - ( 2 * 4 ) - 25/2, 800, 950);

    setCirclePos({ x: newX, y: newY });
  }, []);


  // WIN??(circlePos, success)
  useEffect(() => {
    circlePos.x > playgroundDiv.current.clientWidth - ( targetDiv.current.clientWidth + 20 + 4 + 4 ) &&  // 20 is dist from right 4 and 4 are borders of target and playground respectively
    circlePos.x < playgroundDiv.current.clientWidth - ( 20 + 4 + 4 + 25/2 ) &&
    circlePos.y > 20 + 4 &&
    circlePos.y < 20 + 4 + targetDiv.current.clientHeight - 25/2
      ? setSuccess(true)
      : setSuccess(false);
  }, [circlePos]);


return (
  <div className="flex flex-col items-center justify-center h-screen p-5 bg-red-500">
    <div ref={playgroundDiv} className={`playground relative w-[1000px] h-[400px] bg-green-300 m-5 border-${playgroundBorder} rounded-md border-black`}>
      <Target targetDiv={targetDiv} success={success} />
      <Circle circlePos={circlePos} />
      <SuccessMessage success={success} />
    </div>
    
    <ArrowButtonGrid pressedKey={pressedKey} setPressedKey={setPressedKey} />
  </div>
);
}

export default App;
