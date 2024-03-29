import Particle from "./Particle";
import mouse from "./mouse";
import colors from "./colors";

/**
 * Class for making particle background on canvas.
 * Canvas element with given selector must exist on page
 *
 * @param {string} canvasSelector Selector for finding canvas element
 *
 * @param {boolean} mouseInteraction Enables interaction between particles and cursor
 *
 * @param {number} mouseRadius Size of radius around mouse
 *
 * @param {number} canvasW width of canvas
 *
 * @param {number} canvasH height of canvas
 *
 * @param {Object<boolean>} runAnimation Enables animation of particles
 *
 * @param {number} particleCount Number of particles
 *
 * @param {boolean} alpha Boolean that indicates if the canvas contains an alpha buffer.
 *
 * @param {string} bgColor Background of canvas
 *
 * @param {number} speedMod Speed modifier of particles
 *
 * @param {Array<number>} lineColor Color of connecting lines
 *
 * @param {string} particleColor Color of particles
 *
 * @param {number} lineModifier Distance of line when to connect , lower number shorter distance
 *
 * @constructor
 */
class PBackground {
  constructor({
                canvasSelector = '#canvas',
                mouseInteraction = true,
                mouseRadius = 100,
                canvasW = window.innerWidth,
                canvasH = window.innerHeight,
                runAnimation = {value: true},
                particleCount = 200,
                alpha = true,
                speedMod = 5,
                bgColor = 'black',
                lineColor = null,
                particleColor = null,
                lineModifier= 20000,
              } = {}) {

    this.canvasSelector = canvasSelector;
    this.canvas = document.querySelector(canvasSelector);
    this.runAnimation = runAnimation;
    this.particlesArray = [];
    this.particleCount = particleCount;
    this.alpha = alpha;
    this.speedMod = speedMod;
    this.mouseInteraction = mouseInteraction;
    this.lineModifier = lineModifier;
    this.canvasW = canvasW;
    this.canvasH = canvasH;

    this.canvas.width = this.canvasW;
    this.canvas.height = this.canvasH;

    if (this.mouseInteraction) {
      this.mouseRadius = mouseRadius;
      mouse.radius = this.mouseRadius;
    }

    if (lineColor) {
      this.lineColor = {
        r: lineColor[0],
        g: lineColor[1],
        b: lineColor[2],
      };
    } else {
      this.lineColor = {
        r: Math.random() * 256,
        g: Math.random() * 256,
        b: Math.random() * 256,
      };
    }

    this.particleColor = particleColor;

    this.ctx = this.canvas.getContext('2d', {alpha: this.alpha});

    this.canvas.style.cssText = `background:${bgColor}`;

    this.initListeners();
  }

  initListeners() {
    document.querySelector(this.canvasSelector).addEventListener('click', () => {
      if (this.runAnimation.value === true) {
        this.animate();
      }
    });

    if (this.mouseInteraction) {
      window.addEventListener('mousemove', e => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      window.addEventListener('mouseout', e => {
        mouse.x = undefined;
        mouse.y = undefined;
      });
    }


    window.addEventListener('resize', e => {
      if(this.canvas.width > window.innerWidth) {
        this.canvas.width = window.innerWidth;
      } else {
        this.canvas.width = this.canvasW;
      }

      if(this.canvas.height > window.innerHeight) {
        this.canvas.height = window.innerHeight;
      } else {
        this.canvas.height = this.canvasH;
      }

      mouse.radius = ((this.canvas.height / this.mouseRadius) * (this.canvas.height / this.mouseRadius));
      this.init();
    })
  }

  init() {
    this.particlesArray = [];
    let numberOfParticles = Math.floor(this.particleCount);

    let particleColor =  colors[Math.floor(Math.random() * colors.length)];
    if(this.particleColor) {
      particleColor = this.particleColor;
    }

    let collisionColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 7) + 2;
      let x = (Math.random() * ((this.canvas.width - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((this.canvas.height - size * 2) - (size * 2)) + size * 2);

      let dirX = (Math.random() * this.speedMod) - (this.speedMod / 2);
      let dirY = (Math.random() * this.speedMod) - (this.speedMod / 2);

      this.particlesArray.push(new Particle({
        x: x,
        y: y,
        dirX: dirX,
        dirY: dirY,
        size: size,
        color: particleColor,
        canvas: this.canvas,
        ctx: this.ctx,
        collisionColor: collisionColor
      }));
    }
  }

  animate() {
    if (this.runAnimation.value === true) {
      requestAnimationFrame(() => this.animate());
    }

    this.ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].update();
    }
    this.connect();
  }

  connect() {
    let opacity = 0.5;
    for (let i = 0; i < this.particlesArray.length; i++) {
      for (let j = i; j < this.particlesArray.length; j++) {
        let distance = (
            (this.particlesArray[i].x - this.particlesArray[j].x) * (this.particlesArray[i].x - this.particlesArray[j].x)) +
          ((this.particlesArray[i].y - this.particlesArray[j].y) * (this.particlesArray[i].y - this.particlesArray[j].y));

        if (distance < (this.canvas.width / 7) * (this.canvas.height / 7)) {
          opacity = 1 - (distance / this.lineModifier);
          this.ctx.strokeStyle = `rgba(${this.lineColor.r}, ${this.lineColor.g}, ${this.lineColor.b}, ${opacity})`;
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
