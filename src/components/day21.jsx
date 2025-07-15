import { useState, useEffect, useMemo } from "react";

function Day21() {
  const pokemonAPi = `https://pokeapi.co/api/v2/pokemon/`;
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const itemPages = 10;

  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = (currentPage - 1) * itemPages;
      setLoading(true);
      try {
        const res = await fetch(
          `${pokemonAPi}?offset=${offset}&limit=${itemPages}`
        );
        const data = await res.json();
        console.log("1");
        setPokemon(data.results);
        setTotalPages(Math.ceil(data.count / itemPages));
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  return (
    <>
      <h1>Intro to useEffect</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemon.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        Next
      </button>
    </>
  );
}

export default Day21;
