import { useState, useMemo } from "react";

function Day17() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy milk", completed: true },
    { id: 2, title: "Write report", completed: false },
    { id: 3, title: "Clean desk", completed: false },
  ]);

  const completed = useMemo(
    () => tasks.filter((task) => task.completed),
    [tasks]
  );

  const pending = useMemo(
    () => tasks.filter((task) => !task.completed),
    [tasks]
  );

  return (
    <>
      <h1>Task:</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <h1>Summary:</h1>
      <p>Completed: {completed.length}</p>
      <p>Pending: {pending.length}</p>
    </>
  );
}

export default Day17;
