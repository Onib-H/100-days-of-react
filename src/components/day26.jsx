import { useState, useEffect, useMemo } from "react";

function Day26() {
  const randomAPI = "https://randomuser.me/api/";
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(randomAPI);
      const data = await res.json();
      setUser((prev) => [...prev, ...data.results]);
      setError("");
      console.log(user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Fetch on button click vs. on mount</h1>
      {error && <p>{error}</p>}
      {user.map((u) => (
        <div>
          <img src={u.picture.large} alt={u.name.first} />
          <p>{u.name.first + " " + u.name.last}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      <button onClick={fetchUser}> Fetch New User</button>
    </div>
  );
}

export default Day26;
