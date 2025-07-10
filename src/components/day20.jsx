import { useState, useMemo } from "react";

function Day20() {
  const initialTasks = [
    {
      id: 1,
      title: "Finish report",
      category: "Work",
      dueDate: "2024-07-20",
      priority: 3,
    },
    {
      id: 2,
      title: "Buy groceries",
      category: "Personal",
      dueDate: "2024-07-11",
      priority: 2,
    },
    {
      id: 3,
      title: "Submit homework",
      category: "School",
      dueDate: "2024-07-14",
      priority: 1,
    },
    {
      id: 4,
      title: "Team meeting",
      category: "Work",
      dueDate: "2024-07-10",
      priority: 2,
    },
    {
      id: 5,
      title: "Call mom",
      category: "Personal",
      dueDate: "2024-07-19",
      priority: 3,
    },
    {
      id: 6,
      title: "Code challenge",
      category: "Free Time",
      dueDate: "2024-07-15",
      priority: 1,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("title");

  const filteredTasks = useMemo(() => {
    return category === "All"
      ? tasks
      : tasks.filter((task) => task.category === category);
  }, [tasks, category]);

  const sortedTasks = useMemo(() => {
    const sorted = [...filteredTasks].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];

      if (sortField === "dueDate") {
        return new Date(fieldA) - new Date(fieldB);
      }

      if (sortField === "priority") {
        return fieldA - fieldB;
      }

      return fieldA.localeCompare(fieldB);
    });

    return sortOrder === "asc" ? sorted : sorted.reverse();
  }, [filteredTasks, sortOrder, sortField]);

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
      <label htmlFor="sortField">Sort by:</label>
      <select
        name="sortField"
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
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
      <p>You selected {sortField}</p>
      {sortedTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {sortedTasks.map((task) => (
            <li key={task.id}>
              {task.title} || {task.dueDate} || {task.priority}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Day20;
