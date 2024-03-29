import { useState, useEffect, useRef } from "react";
import ArrowButtonGrid from "./components/ArrowButtonGrid";
import Circle from "./components/Circle";
import SuccessMessage from "./components/SuccessMessage";
import Target from "./components/Target";

function App() {
  const [circlePos1, setCirclePos1] = useState({ x: 0, y: 0 });
  const [circlePos2, setCirclePos2] = useState({ x: 0, y: 0 });
  const [circlePos3, setCirclePos3] = useState({ x: 0, y: 0 });
  const [success, setSuccess] = useState(false);
  const [pressedKey1, setPressedKey1] = useState(null);
  const [pressedKey2, setPressedKey2] = useState(null);
  const [pressedKey3, setPressedKey3] = useState(null);
  const playgroundHeight = "h-[150px]"
  const playgroundBorder = 4;
  const playgroundDiv1 = useRef(null);
  const playgroundDiv2 = useRef(null);
  const playgroundDiv3 = useRef(null);
  const targetDiv = useRef(null);
  const up = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const down = useRef(null);

  // RANDOM SPAWN CIRCLE(playground, circlePos)
  // useEffect(() => {
  //   const generateRandomNumber = (min, max) => {
  //     const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  //     return randomValue;
  //   };

  //   const newY = generateRandomNumber(
  //     0,
  //     playgroundDiv1.current.clientHeight - 2 * 4 - 25 / 2,
  //   );
  //   const newX = generateRandomNumber(
  //     0,
  //     playgroundDiv1.current.clientWidth - 2 * 4 - 25 / 2,
  //   );
    
  //   setCirclePos1({ x: newX, y: newY });
  //   setCirclePos2({ x: newX, y: newY });
  //   setCirclePos3({ x: newX, y: newY });
    
  // }, []);

  //KEYBOARD(pressedKey)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.startsWith("Arrow")) {
        setPressedKey1(e.key);
      }
    };
    const handleKeyUp = (e) => {
      if (e.key.startsWith("Arrow")) {
        setPressedKey1(null);
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
      if (pressedKey1) {
        switch (pressedKey1) {
          case "ArrowUp":
            setCirclePos1((prevPosition) => ({
              ...prevPosition,
              y: Math.max(prevPosition.y - movement, 0),
            }));
            break;
          case "ArrowDown":
            setCirclePos1((prevPosition) => ({
              ...prevPosition,
              y: Math.min(
                prevPosition.y + movement,
                playgroundDiv1.current.clientHeight - 2 * 4 - 25 / 2
              ),
            }));
            break;
          case "ArrowLeft":
            setCirclePos1((prevPosition) => ({
              ...prevPosition,
              x: Math.max(prevPosition.x - movement, 0),
            }));
            break;
          case "ArrowRight":
            setCirclePos1((prevPosition) => ({
              ...prevPosition,
              x: Math.min(
                prevPosition.x + movement,
                playgroundDiv1.current.clientWidth - 2 * 4 - 25 / 2
              ),
            }));
            break;
          default:
            break;
        }
      }
    };

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [pressedKey1]);

  //CIRCLE2 POSITION CHANGE using pressedKey2(pressedKey, circlePos)
  useEffect(() => {
    const movement = 10;
    const handleMovement = () => {
      if (pressedKey2) {
        switch (pressedKey2) {
          case "ArrowUp":
            setCirclePos2((prevPosition) => ({
              ...prevPosition,
              y: Math.max(prevPosition.y - movement, 0),
            }));
            break;
          case "ArrowDown":
            setCirclePos2((prevPosition) => ({
              ...prevPosition,
              y: Math.min(
                prevPosition.y + movement,
                playgroundDiv1.current.clientHeight - 2 * 4 - 25 / 2
              ),
            }));
            break;
          case "ArrowLeft":
            setCirclePos2((prevPosition) => ({
              ...prevPosition,
              x: Math.max(prevPosition.x - movement, 0),
            }));
            break;
          case "ArrowRight":
            setCirclePos2((prevPosition) => ({
              ...prevPosition,
              x: Math.min(
                prevPosition.x + movement,
                playgroundDiv1.current.clientWidth - 2 * 4 - 25 / 2
              ),
            }));
            break;
          default:
            break;
        }
      }
    };

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [pressedKey2]);

  //CIRCLE2 POSITION CHANGE using pressedKey2(pressedKey, circlePos)
  useEffect(() => {
    const movement = 10;
    const handleMovement = () => {
      if (pressedKey3) {
        switch (pressedKey3) {
          case "ArrowUp":
            setCirclePos3((prevPosition) => ({
              ...prevPosition,
              y: Math.max(prevPosition.y - movement, 0),
            }));
            break;
          case "ArrowDown":
            setCirclePos3((prevPosition) => ({
              ...prevPosition,
              y: Math.min(
                prevPosition.y + movement,
                playgroundDiv1.current.clientHeight - 2 * 4 - 25 / 2
              ),
            }));
            break;
          case "ArrowLeft":
            setCirclePos3((prevPosition) => ({
              ...prevPosition,
              x: Math.max(prevPosition.x - movement, 0),
            }));
            break;
          case "ArrowRight":
            setCirclePos3((prevPosition) => ({
              ...prevPosition,
              x: Math.min(
                prevPosition.x + movement,
                playgroundDiv1.current.clientWidth - 2 * 4 - 25 / 2
              ),
            }));
            break;
          default:
            break;
        }
      }
    };

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [pressedKey3]);

  // WIN??(circlePos, success)
  useEffect(() => {
    const targetRect = targetDiv.current.getBoundingClientRect();
    const playgroundRect = playgroundDiv1.current.getBoundingClientRect();
  
    const insideTarget = (
      circlePos3.x > targetRect.left-playgroundRect.left &&
      circlePos3.x < targetRect.right-playgroundRect.left &&
      circlePos3.y > targetRect.top-playgroundRect.top &&
      circlePos3.y < targetRect.bottom-playgroundRect.top
    );
  
    setSuccess(insideTarget);
  }, [circlePos3]);

  // for detecting the collision of the first ball with the controls to move the 2 ball
  useEffect(() => {
    const upRect = up.current.getBoundingClientRect();
    const downRect = down.current.getBoundingClientRect();
    const leftRect = left.current.getBoundingClientRect();
    const rightRect = right.current.getBoundingClientRect();
    const playgroundRect = playgroundDiv3.current.getBoundingClientRect();

    const handleMovement = () => {
      if( circlePos1.x > upRect.left-playgroundRect.left &&
        circlePos1.x < upRect.right-playgroundRect.left &&
        circlePos1.y > upRect.top-playgroundRect.top &&
        circlePos1.y < upRect.bottom-playgroundRect.top ){
          setPressedKey2("ArrowUp")
        }
      else if( circlePos1.x > leftRect.left-playgroundRect.left &&
        circlePos1.x < leftRect.right-playgroundRect.left &&
        circlePos1.y > leftRect.top-playgroundRect.top &&
        circlePos1.y < leftRect.bottom-playgroundRect.top ){
          setPressedKey2("ArrowLeft")
        }
      else if( circlePos1.x > rightRect.left-playgroundRect.left &&
        circlePos1.x < rightRect.right-playgroundRect.left &&
        circlePos1.y > rightRect.top-playgroundRect.top &&
        circlePos1.y < rightRect.bottom-playgroundRect.top ){
          setPressedKey2("ArrowRight")
        }
      else if( circlePos1.x > downRect.left-playgroundRect.left &&
        circlePos1.x < downRect.right-playgroundRect.left &&
        circlePos1.y > downRect.top-playgroundRect.top &&
        circlePos1.y < downRect.bottom-playgroundRect.top ){
          setPressedKey2("ArrowDown")
        }
      else {
        setPressedKey2(null)
      }
    }

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [circlePos1]);

  // for detecting the collision of the 2 ball with the controls to move the 3 ball
  useEffect(() => {
    const upRect = up.current.getBoundingClientRect();
    const downRect = down.current.getBoundingClientRect();
    const leftRect = left.current.getBoundingClientRect();
    const rightRect = right.current.getBoundingClientRect();
    const playgroundRect = playgroundDiv3.current.getBoundingClientRect();
    console.log(upRect.left-playgroundRect.left)
    console.log(upRect.right-playgroundRect.left)
    console.log(upRect.top-playgroundRect.top)
    console.log(upRect.bottom-playgroundRect.top)

    const handleMovement = () => {
      if( circlePos2.x > upRect.left-playgroundRect.left &&
        circlePos2.x < upRect.right-playgroundRect.left &&
        circlePos2.y > upRect.top-playgroundRect.top &&
        circlePos2.y < upRect.bottom-playgroundRect.top ){
          setPressedKey3("ArrowUp")
        }
      else if( circlePos2.x > leftRect.left-playgroundRect.left &&
        circlePos2.x < leftRect.right-playgroundRect.left &&
        circlePos2.y > leftRect.top-playgroundRect.top &&
        circlePos2.y < leftRect.bottom-playgroundRect.top ){
          setPressedKey3("ArrowLeft")
        }
      else if( circlePos2.x > rightRect.left-playgroundRect.left &&
        circlePos2.x < rightRect.right-playgroundRect.left &&
        circlePos2.y > rightRect.top-playgroundRect.top &&
        circlePos2.y < rightRect.bottom-playgroundRect.top ){
          setPressedKey3("ArrowRight")
        }
      else if( circlePos2.x > downRect.left-playgroundRect.left &&
        circlePos2.x < downRect.right-playgroundRect.left &&
        circlePos2.y > downRect.top-playgroundRect.top &&
        circlePos2.y < downRect.bottom-playgroundRect.top ){
          setPressedKey3("ArrowDown")
        }
      else {
        setPressedKey3(null)
      }
    }

    const interval = setInterval(handleMovement, 100);

    return () => clearInterval(interval);
  }, [circlePos2]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 bg-red-500">
      {/* 1 */}
      <div
        ref={playgroundDiv1}
        className={`playground relative w-[1000px] ${playgroundHeight} bg-green-300 m-5 border-${playgroundBorder} rounded-md border-black`}
      >
        <Target targetDiv={targetDiv} success={success} />
        <Circle circlePos={circlePos3} />
        <SuccessMessage success={success} />
      </div>

      {/* 2 */}
      <div
        ref={playgroundDiv2}
        className={`playground relative w-[1000px] ${playgroundHeight} bg-green-300 m-5 border-${playgroundBorder} rounded-md border-black`}
      >
        <Circle circlePos={circlePos2} />
        <ArrowButtonGrid
          pressedKey={pressedKey3}
          setPressedKey={setPressedKey3}
        />
      </div>

      {/* 3 */}
      <div
        ref={playgroundDiv3}
        className={`playground relative w-[1000px] ${playgroundHeight} bg-green-300 m-5 border-${playgroundBorder} rounded-md border-black`}
      >
        <Circle circlePos={circlePos1} />
        <ArrowButtonGrid
          pressedKey={pressedKey2}
          setPressedKey={setPressedKey2}
          up={up}
          left={left}
          right={right}
          down={down}
        />
      </div>

      {/* CONTROLS: 4 */}
      <ArrowButtonGrid pressedKey={pressedKey1} setPressedKey={setPressedKey1} />
    </div>
  );
}

export default App;
