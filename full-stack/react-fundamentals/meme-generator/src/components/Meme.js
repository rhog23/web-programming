import { useState, useEffect } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  let url;
  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    url = allMemes[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input
          className="form--input"
          type="text"
          name="topText"
          id="topText"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="text"
          name="bottomText"
          id="bottomText"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
