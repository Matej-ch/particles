import mouse from "./mouse";

class Particle {
  constructor({x,y,dirX,dirY,size,color,canvas,ctx,collisionColor = 'DarkOrange'}) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
    this.canvas = canvas;
    this.ctx = ctx;
    this.collisionColor = collisionColor;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
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
      this.color = this.collisionColor;
      if (mouse.x < this.x && this.x < this.canvas.width - this.size * 10) {
        this.x += 2;

      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 2;
      }
      if (mouse.y < this.y && this.y < this.canvas.height - this.size * 10) {
        this.y += 2;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 2;
      }
    }
  }

  isOnCanvasX() {
    return this.x > this.canvas.width || this.x < 0;
  }

  isOnCanvasY() {
    return this.y > this.canvas.height || this.y < 0;
  }
}

export default Particle;
