import { useState, useMemo } from "react";

function Day18() {
  const initialTasks = [
    { id: 1, title: "Finish report", category: "Work" },
    { id: 2, title: "Buy groceries", category: "Personal" },
    { id: 3, title: "Submit homework", category: "School" },
    { id: 4, title: "Team meeting", category: "Work" },
    { id: 5, title: "Call mom", category: "Personal" },
    { id: 6, title: "Code challenge", category: "Free Time" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [category, setCategory] = useState("All");

  const filteredTasks = useMemo(() => {
    return category === "All"
      ? tasks
      : tasks.filter((task) => task.category === category);
  }, [tasks, category]);

  const categories = ["All", ...new Set(tasks.map((task) => task.category))];

  return (
    <>
      <h1>Task:</h1>
      <label htmlFor="category">Filter by Category:</label>
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Day18;
