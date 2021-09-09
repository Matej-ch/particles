class PBackground {
  constructor({canvasSelector = '#canvas',mouseInteraction= true} = {}) {
      this.canvas = document.querySelector(canvasSelector);
      this.ctx = this.canvas.getContext('2d', { alpha: false });
  }

  set alpha(alpha) {

  }

  test() {
    console.log(this.canvas)
  }

  listeners() {

  }
}

export default PBackground;
