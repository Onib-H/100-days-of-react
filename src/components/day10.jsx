import { useState } from "react";

function Day10() {
  const [fruits, setFruits] = useState([]);
  const [fruit, setFruit] = useState("");

  function addFruit() {
    if (fruit.trim() !== "") {
      setFruits((prev) => [...prev, fruit]);
      setFruit("");
    }
  }

  return (
    <div>
      <h1>Add items to a list via input.</h1>
      <input
        type="text"
        placeholder="Enter a fruit"
        value={fruit}
        onChange={(event) => setFruit(event.target.value)}
      />
      <button onClick={addFruit}>Add fruit</button>
      <h2>List of fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Day10;
