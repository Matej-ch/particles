const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d', { alpha: false });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

let mouse = {
  x:null,
  y:null,
  radius: (canvas.height /100) * (canvas.width/100)
}

let runAnimation = {
  value: true
};

document.getElementById('canvas1').addEventListener('click', function() {
  // flip flag
  runAnimation.value = !runAnimation.value;

  if(runAnimation.value) {
    //var date = new Date();
    //var time = date.getTime();
    animate();
  }
});

window.addEventListener('mousemove',e => {
  mouse.x = e.x;
  mouse.y = e.y;
})

window.addEventListener('mouseout',e => {
  mouse.x = undefined;
  mouse.y = undefined;
})

class Particle {
  constructor(x,y,dirX,dirY,size,color) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if(this.isOnCanvasX()) {
      this.dirX = -this.dirX;
    }
    if(this.isOnCanvasY()) {
      this.dirY = -this.dirY;
    }

    //check collision
    this.checkCollision();

    this.x += this.dirX;
    this.y += this.dirY;

    this.draw();

  }

  checkCollision() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
  }

  isOnCanvasX() {
    return this.x > canvas.width || this.x < 0;
  }

  isOnCanvasY() {
    return this.y > canvas.height || this.y < 0;
  }
}

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
  }

  for (let i =0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

function connect () {
  let opacity = 0.5;
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i; j < particlesArray.length; j++) {
      let distance = ((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) + ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));

      if(distance < (canvas.width / 7) * (canvas.height/7) ) {
        opacity = 1 - (distance/20000);
        ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x,particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x,particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

init();
animate();

window.addEventListener('resize',e => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = ((canvas.height/100) * (canvas.height/100));
  init();
})
