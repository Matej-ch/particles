import "./css/main.css";
import mouse from "./js/mouse";
import Particle from "./js/Particle";
import {canvas,ctx} from "./js/canvas";
import PBackground from "./js/PBackground";

let particlesArray = [];

let runAnimation = {
  value: true
};

window.addEventListener('mousemove',e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('mouseout',e => {
  mouse.x = undefined;
  mouse.y = undefined;
});

document.getElementById('canvas1').addEventListener('click', function() {
  runAnimation.value = !runAnimation.value;

  if(runAnimation.value) {
    animate();
  }
});

function init() {
  particlesArray = [];
  let numberOfParticles = Math.floor((canvas.height * canvas.width) / 9000);
  for(let i =0;i <numberOfParticles; i++) {
    let size = (Math.random() * 7) + 2;
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);

    let dirX = (Math.random() * 5) - 2.5;
    let dirY = (Math.random() * 5) - 2.5;

    let color = 'gold';

    particlesArray.push(new Particle(x,y,dirX,dirY,size,color));
  }
}

function animate() {

  if(runAnimation.value) {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);


    for (let i =0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }
}

function connect () {
  let opacity = 0.5;
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i; j < particlesArray.length; j++) {
      let distance = ((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) + ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));

      if(distance < (canvas.width / 7) * (canvas.height/7) ) {
        opacity = 1 - (distance/20000);
        ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
        ctx.lineWidth = particlesArray[i].size / 5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x,particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x,particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}


window.addEventListener('resize',e => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = ((canvas.height/100) * (canvas.height/100));
  init();
})

init();
animate();

const bg = new PBackground({canvasSelector: '#canvas1'});
bg.test();
//vytvori instanciu celeho pozadia, nastavenia cez konstructor // rychlost, pozadie, enable disable mouse interaction


module.exports.PBackground = PBackground;
