import {ctx,canvas} from "./canvas";
import mouse from "./mouse";

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
      this.color = 'DarkOrange';
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 5;

      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 5;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 5;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 5;
      }
    } else {
      this.color = 'gold';
    }
  }

  isOnCanvasX() {
    return this.x > canvas.width || this.x < 0;
  }

  isOnCanvasY() {
    return this.y > canvas.height || this.y < 0;
  }
}

export default Particle;
