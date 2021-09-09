import "./css/main.css";
import PBackground from "./js/PBackground";

const bg = new PBackground({canvasSelector: '#canvas1'});
bg.init();
bg.animate();

//vytvori instanciu celeho pozadia, nastavenia cez konstructor // rychlost, pozadie, enable disable mouse interaction


//module.exports.PBackground = PBackground;
