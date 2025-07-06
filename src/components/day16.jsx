// import { useState } from "react";

// function Day16() {
//   const [list, setList] = useState([
//     "Up",
//     "Spider man",
//     "Super man",
//     "Iron man",
//   ]);
//   const [favoriteList, setFavoriteList] = useState([]);

//   function handleFavorite(index) {
//     const updatedList = list.filter((item, i) => i !== index);
//     setList(updatedList);
//     setFavoriteList((prev) => [...prev, list[index]]);
//   }

//   function handleUnfavorite(index) {
//     const updatedList = favoriteList.filter((item, i) => i !== index);
//     setFavoriteList(updatedList);
//     setList((prev) => [...prev, favoriteList[index]]);
//   }
//   return (
//     <>
//       <h1>Toggle item state (e.g., favorite/unfavorite)</h1>
//       <h2>Movie List</h2>
//       {list.map((item, index) => (
//         <li key={index} onClick={() => handleFavorite(index)}>
//           {item}
//         </li>
//       ))}
//       <h2>Favorite List</h2>
//       {favoriteList.map((item, index) => (
//         <li key={index} onClick={() => handleUnfavorite(index)}>
//           {item}
//         </li>
//       ))}
//     </>
//   );
// }

// export default Day16;

import { useState } from "react";

function Day16() {
  const [movies, setMovies] = useState([
    { name: "Up", favorite: false },
    { name: "Spider man", favorite: false },
    { name: "Super man", favorite: false },
    { name: "Iron man", favorite: false },
  ]);

  function toggleFavorite(index) {
    const updated = movies.map((movie, i) =>
      i === index ? { ...movie, favorite: !movie.favorite } : movie
    );
    setMovies(updated);
  }

  return (
    <>
      <h1>Toggle item state (e.g., favorite/unfavorite)</h1>

      <h2>Movie List</h2>
      <ul>
        {movies
          .filter((m) => !m.favorite)
          .map((movie) => (
            <li
              key={movie.name}
              onClick={() =>
                toggleFavorite(movies.findIndex((m) => m.name === movie.name))
              }
              style={{ cursor: "pointer" }}
            >
              {movie.name}
            </li>
          ))}
      </ul>

      <h2>Favorite List</h2>
      <ul>
        {movies
          .filter((m) => m.favorite)
          .map((movie) => (
            <li
              key={movie.name}
              onClick={() =>
                toggleFavorite(movies.findIndex((m) => m.name === movie.name))
              }
              style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}
            >
              {movie.name}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Day16;
