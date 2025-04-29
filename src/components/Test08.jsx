/**
Task:

Use JSX to render a <ul> list of three favorite fruits.
 */

function Test08() {
  const fruits = ["Apple", "Banana", "Cherry"];

  const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    // Your code here
    <div>
      <h3>My Favorite Fruits</h3>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Test08;
