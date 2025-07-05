import { useState } from "react";
function Day11() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Controlled form inputs</h1>
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
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <h2>
        You typed: <br /> Name: {formData.name}
        <br /> Email: {formData.email}
      </h2>
    </div>
  );
}

export default Day11;
