export default function Demo() {
  function handleClick() {
    console.log("I was clicked");
  }

  return (
    <div className="container">
      <img
        src={require("../images/meme-logo.png")}
        onMouseOver={(e) => (e.target.style.filter = "brightness(50%)")}
        onMouseLeave={(e) => e.target.style.removeProperty("filter")}
        alt=""
        srcset=""
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
