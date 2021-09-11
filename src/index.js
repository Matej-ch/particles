import PBackground from "./js/PBackground";

const bg = new PBackground({
  canvasSelector: '#canvas1',
  bgColor:'linear-gradient(0.15turn, rgb(223, 185, 106, 1), rgb(135, 190, 231, 1)90% )',
  canvasH: 500,
  speedMod: 0.25,
  particleCount: 150,
  lineColor: [0, 84, 219]});
bg.init();
bg.animate();

//module.exports.PBackground = PBackground;
