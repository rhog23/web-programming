import { proxy } from "valtio";

const state = proxy({
  intro: true, // determine whether we are in the home page or note
  color: "#EFBD48",
  shirtColor: "#EFBD48",
  isLogoTexture: true, // are we currently displaying the logo texture
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
