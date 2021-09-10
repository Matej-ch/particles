https://matej-ch.github.io/particles/

Particle background

# WIP


# Installation
``
npm install
``

# Usage

```javascript

const bg = new PBackground({
  canvasSelector: '#canvas1',
  bgColor:'linear-gradient(0.15turn, rgb(223, 185, 106, 1), rgb(135, 190, 231, 1)90% )',
  speedMod: 0.25,
  lineColor: [0, 84, 219]});

/** initialize particles */
bg.init();

/** start animation */
bg.animate();

```
