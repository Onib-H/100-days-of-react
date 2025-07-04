import OFF from "../assets/OFF.jpg";
import ON from "../assets/ON.jpg";
import { useState } from "react";

function Day6() {
  const [isON, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((prev) => !prev);
  }
  return (
    <>
      <h1>Toggle Lights</h1>
      <img src={isON ? ON : OFF} alt="Bulb" width={100} /> <br />
      <button onClick={handleClick}>{isON ? "Turn off" : "Turn On"}</button>
    </>
  );
}

export default Day6;
