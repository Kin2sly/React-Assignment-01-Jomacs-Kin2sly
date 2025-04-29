/**
Task:

Create a button that says "Click Jomacs!" where "Jomacs" is a JavaScript variable.
 */

function Test09() {
  const name = "Jomacs";

  return (
    // Your code here

    <button onClick={() => alert("Clicked")}>click {name}</button>
  );
}

export default Test09;
