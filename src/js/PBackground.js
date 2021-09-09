import Particle from "./Particle";
import mouse from "./mouse";

/**
 * Class for making particle background on canvas.
 * Canvas element with given selector must exist on page
 *
 * @param {string} canvasSelector Selector for finding canvas element
 *
 * @param {boolean} mouseInteraction Enables interaction between particles and cursor
 *
 * @param {number} canvasW width of canvas
 *
 * @param {number} canvasH height of canvas
 *
 * @param {Object.<boolean>} runAnimation Enables animation of particles
 *
 * @param {number} particleCount Number of particles, Higher the number, LESS of the particles
 *
 * @param {boolean} alpha Boolean that indicates if the canvas contains an alpha buffer.
 *
 * @param {string} bg Background of canvas
 *
 * @constructor
 */
class PBackground {
  constructor({canvasSelector = '#canvas',
                mouseInteraction = true,
                canvasW = window.innerWidth,
                canvasH = window.innerHeight,
                runAnimation = { value: true},
                particleCount = 9000,alpha= false,
                bg = 'black'} = {}) {

    this.canvasSelector = canvasSelector;
    this.canvas = document.querySelector(canvasSelector);
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
    this.runAnimation = runAnimation;
    this.particlesArray = [];
    this.particleCount = particleCount;
    this.alpha = alpha;

    mouse.radius = (this.canvas.height /110) * (this.canvas.width/110);

    this.ctx = this.canvas.getContext('2d', {alpha: true});

    this.canvas.style.cssText = bg;

    this.initListeners();
  }

  initListeners() {

    let instance = this;

    document.querySelector(this.canvasSelector).addEventListener('click', function () {
      this.runAnimation.value = !this.runAnimation.value;

      if (this.runAnimation.value) {
        instance.animate();
      }
    });

    window.addEventListener('mousemove', e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('mouseout', e => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    window.addEventListener('resize', e => {
      this.canvas.width = innerWidth;
      this.canvas.height = innerHeight;
      mouse.radius = ((this.canvas.height / 100) * (this.canvas.height / 100));
      this.init();
    })
  }

  init() {
    this.particlesArray = [];
    let numberOfParticles = Math.floor((this.canvas.height * this.canvas.width) / this.particleCount);

    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 7) + 2;
      let x = (Math.random() * ((this.canvas.width - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((this.canvas.height - size * 2) - (size * 2)) + size * 2);

      let dirX = (Math.random() * 5) - 2.5;
      let dirY = (Math.random() * 5) - 2.5;

      let color = 'gold';

      this.particlesArray.push(new Particle({
        x:x, y:y, dirX:dirX, dirY:dirY, size:size, color: color, canvas: this.canvas, ctx:this.ctx
      }));
    }
  }

  animate() {
    //if (this.runAnimation.value) {
      requestAnimationFrame(() => this.animate());
      this.ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < this.particlesArray.length; i++) {
        this.particlesArray[i].update();
      }
      this.connect();
    //}
  }

  connect() {
    let opacity = 0.5;
    for (let i = 0; i < this.particlesArray.length; i++) {
      for (let j = i; j < this.particlesArray.length; j++) {
        let distance = ((this.particlesArray[i].x - this.particlesArray[j].x) * (this.particlesArray[i].x - this.particlesArray[j].x)) + ((this.particlesArray[i].y - this.particlesArray[j].y) * (this.particlesArray[i].y - this.particlesArray[j].y));

        if (distance < (this.canvas.width / 7) * (this.canvas.height / 7)) {
          opacity = 1 - (distance / 20000);
          this.ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
          this.ctx.lineWidth = this.particlesArray[i].size / 5;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particlesArray[i].x, this.particlesArray[i].y);
          this.ctx.lineTo(this.particlesArray[j].x, this.particlesArray[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
}

export default PBackground;
