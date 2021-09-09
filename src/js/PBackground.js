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
 * @constructor
 */
class PBackground {
  constructor({canvasSelector = '#canvas',
                mouseInteraction = true,
                canvasW = window.innerWidth,
                canvasH = window.innerHeight,
                runAnimation = { value: true},
                particleCount = 9000} = {}) {

    this.canvasSelector = canvasSelector;
    this.canvas = document.querySelector(canvasSelector);
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
    this.runAnimation = runAnimation;

    mouse.radius = (this.canvas.height /110) * (this.canvas.width/110);

    this.setAlpha();

    this.ctx = this.canvas.getContext('2d', {alpha: this.alpha});
  }

  setAlpha(alpha = false) {
    this.alpha = alpha;
  }

  initListeners() {
    document.querySelector(this.canvasSelector).addEventListener('click', function () {
      this.runAnimation.value = !this.runAnimation.value;

      if (this.runAnimation.value) {
        this.animate();
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
      //init();
    })
  }

  init() {
    let particlesArray = [];
    let numberOfParticles = Math.floor((this.canvas.height * this.canvas.width) / 9000);

    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 7) + 2;
      let x = (Math.random() * ((this.canvas.width - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((this.canvas.height - size * 2) - (size * 2)) + size * 2);

      let dirX = (Math.random() * 5) - 2.5;
      let dirY = (Math.random() * 5) - 2.5;

      let color = 'gold';

      particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
    }
  }

  animate() {

  }
}

export default PBackground;
