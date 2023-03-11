import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  let url;
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input
          className="form--input"
          type="text"
          name=""
          id=""
          placeholder="Top text"
        />
        <input
          className="form--input"
          type="text"
          name=""
          id=""
          placeholder="Bottom text"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img className="meme--image" src={meme.randomImage} alt="" />
    </main>
  );
}
