import { useState, useMemo } from "react";

function Day19() {
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
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredTasks = useMemo(() => {
    return category === "All"
      ? tasks
      : tasks.filter((task) => task.category === category);
  }, [tasks, category]);

  const sortedTasks = useMemo(() => {
    const sorted = [...filteredTasks].sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return sortOrder === "asc" ? sorted : sorted.reverse();
  }, [filteredTasks, sortOrder]);

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
      </select>{" "}
      <br />
      <br />
      <label htmlFor="sort">Sort:</label>
      <select
        name="sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {sortedTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {sortedTasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Day19;
