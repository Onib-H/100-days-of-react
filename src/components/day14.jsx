import { useState } from "react";

function Day14() {
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

  function handleDeleteItem(index) {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    // const updatedList = [...list];
    // updatedList.splice(index, 1);
    // setList(updatedList);
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
            <li key={index} onClick={() => handleDeleteItem(index)}>
              {item}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Day14;
