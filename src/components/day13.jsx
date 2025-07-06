import { useState } from "react";
function Day13() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (item.trim() === "") return;
    setList((prev) => [...prev, item]);
    setItem("");
  }

  function handleKeyDown(e) {
    if (e.key === "Control") {
      e.preventDefault();
      setItem("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add items to a list</h1>
        <input
          type="text"
          placeholder="Enter a item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Add</button>

        <h2>List of items:</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Day13;
