import { useState, useEffect } from "react";

function Day28() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://randomuser.me/api/?results=5&page=${page}`
      );
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h1> API Pagination</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>

      {loading && <p>Loading...</p>}
      <div>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Day28;
