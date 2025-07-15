import { useState, useEffect, useMemo } from "react";

function Day23() {
  const JSONPlaceholderApi = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchPost]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(JSONPlaceholderApi);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchPost.toLowerCase())
    );
  }, [posts, searchPost]);

  const pagePosts = useMemo(() => {
    const start = (currentPage - 1) * postPerPage;
    const end = start + postPerPage;
    return filteredPosts.slice(start, end);
  }, [currentPage, filteredPosts]);

  const totalPosts = Math.ceil(filteredPosts.length / postPerPage);

  return (
    <div>
      <h1>Fetch data from API (e.g., JSONPlaceholder)</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchPost(event.target.value)}
        value={searchPost}
        name=""
      />

      <ul>
        {pagePosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPosts}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPosts))}
      >
        Next
      </button>
    </div>
  );
}

export default Day23;
