import React, { useState } from "react";

function Day8() {
  const [show, setShow] = useState(true);

  // function handleToggle() {
  //   setShow((prev) => !prev);
  // }

  return (
    <div>
      <h1>Show/hide elements using toggle state.</h1>
      <p>{show && "I am visible"}</p>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Day8;
