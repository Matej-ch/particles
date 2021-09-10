import "./css/main.css";
import PBackground from "./js/PBackground";

const bg = new PBackground({canvasSelector: '#canvas1',bg:'linear-gradient(0turn, rgba(230, 100, 101, 1), rgba(145, 152, 229, 1))'});
bg.init();
bg.animate();

//module.exports.PBackground = PBackground;
