import { useState } from "react";

function Day12() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "name" && value.trim() === "") {
      setError((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    } else if (name === "name") {
      setError((prev) => ({
        ...prev,
        name: "",
      }));
    }
    if (name === "email" && !value.includes("@gmail.com")) {
      setError((prev) => ({
        ...prev,
        email: "Enter a valid email",
      }));
    } else if (name === "email") {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newError = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: !formData.email.includes("@gmail.com")
        ? "Enter a valid email"
        : "",
    };

    setError(newError);

    const hasError = Object.values(newError).some((msg) => msg !== "");

    if (!hasError) {
      alert("Form Submitted Successfully.");
    }
  }

  return (
    <div>
      <h1>Basic form validation</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Day12;
