import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
// import WindowTracker from "./components/WindowTracker";
function App() {
  /*   const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  function getCharacter() {
    setCount((prevCount) => prevCount + 1);
  }

  React.useEffect(
    function () {
      console.log("effect ran");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  ); */
  /*   React.useEffect(() => {
    console.log("effect ran");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [starWarsData]); */
  /* const [show, setShow] = React.useState(true);
  function toggle() {
    setShow((prevShow) => !prevShow);
  } */
  return (
    <div>
      <Header />
      <Meme />
      {/* <div>
        <button onClick={getCharacter}>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div> */}
      {/* <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />} */}
    </div>
  );
}

export default App;
