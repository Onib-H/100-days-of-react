import { useEffect, useState } from "react";
function Day30() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();

        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 500);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    };

    fetchUsers();
    return () => controller.abort();
  }, []);

  return (
    <div style={{ padding: "20px", height: "100vh" }}>
      <h1>Users</h1>

      {loading && (
        <div>
          <div className="spinner"></div>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Day30;
