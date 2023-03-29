import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("changing width...");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return () => {
      console.log("cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
