import { useState } from "react";
function Day7() {
  const [text, setText] = useState("");

  // function handleChange(event) {
  //   setText(event.target.value);
  // }
  return (
    <div>
      <h1>Create controlled inputs (real-time typing).</h1>
      <input
        type="text"
        placeholder="Enter any text."
        onChange={(event) => setText(event.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Day7;
