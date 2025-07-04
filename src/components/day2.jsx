import React from "react";

function Day2() {
  const subheading = "Things I like";
  const imgUrl = "https://tactless7.github.io/cv/img/icons/react_logo_2.png";
  const description = "This is a simple React component using JSX.";
  const fruits = ["Mango", "Banana", "Watermelon"];
  return (
    <div>
      <h1>Welcome to My React Page</h1>
      <h2>{subheading}</h2>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
      <img src={imgUrl} alt="React Logo" width={100} />
      <p>{description}</p>
    </div>
  );
}

export default Day2;
