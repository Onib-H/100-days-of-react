import { useState, useEffect, useMemo } from "react";

function Day27() {
  const JSONPlaceholderApi = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (e) => {
    e.preventDefault();

    const trimmedInput = searchInput.trim();
    if (!trimmedInput) {
      setUsers([]);
      setError("Please enter a name to search.");
      return;
    }
    setLoading(true);
    setError("");
    setUsers([]);
    try {
      const res = await fetch(JSONPlaceholderApi);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();

      const filteredUsers = data.filter((d) =>
        d.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setUsers(filteredUsers);

      if (filteredUsers.length === 0) {
        setError("No users found.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1> Fetch with search query</h1>
      <form onSubmit={fetchUsers}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">{loading ? "Searching..." : "Search"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Day27;
