function Day9() {
  const fruits = ["Mango", "Banana", "Watermelon"];
  return (
    <div>
      <h1>Render lists with `.map()`.</h1>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </div>
  );
}

export default Day9;
