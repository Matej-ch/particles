import "./css/main.css";
import PBackground from "./js/PBackground";

const bg = new PBackground({
  canvasSelector: '#canvas1',
  mouseInteraction: false,
  bg:'linear-gradient(0.15turn, rgb(223, 185, 106, 1), rgb(135, 190, 231, 1)90% )',
  speedMod: 1});
bg.init();
bg.animate();

//module.exports.PBackground = PBackground;
