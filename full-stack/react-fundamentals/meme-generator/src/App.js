import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
function App() {
  const [counter, setCounter] = React.useState(0);
  function addCounter() {
    setCounter((prevCount) => prevCount + 1);
  }
  function subtractCounter() {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <Header />
      <Meme />
      <button onClick={subtractCounter}>-</button>
      <p>{counter}</p>
      <button onClick={addCounter}>+</button>
    </div>
  );
}

export default App;
