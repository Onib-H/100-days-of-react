import { useState } from "react";

function Day15() {
  const [list, setList] = useState(["apple", "banana", "cherry"]);

  function handleUpdate(index) {
    // const updatedItem = prompt("Enter a new item:", list[index]);
    // list[index] = updatedItem;
    // setList([...list]);

    const newValue = prompt("Enter a new item:", list[index]);
    const updatedList = list.map((item, i) => {
      return i === index ? newValue : item;
    });
    setList(updatedList);
  }
  return (
    <div>
      <h1>Editable list</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleUpdate(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Day15;
