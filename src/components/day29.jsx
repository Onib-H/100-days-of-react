import { useState, useMemo, useEffect } from "react";

function Day29() {
  const JSONPlaceholderApi = "https://jsonplaceholder.typicode.com/users";
  const [searchInput, setSearchInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(JSONPlaceholderApi, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        console.log(controller);
        console.log(data);
        setUsers(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    return () => controller.abort();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!debouncedInput.trim()) return [];
    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncedInput.trim().toLowerCase())
    );
  }, [users, debouncedInput]);

  return (
    <div>
      <h1>Debounce Search Input</h1>
      <input
        type="text"
        placeholder="Search... "
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!debouncedInput.trim() ? null : filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}

export default Day29;
