https://matej-ch.github.io/particles/

Particle background


# Installation
``
npm i bg_particles --save
``

# Usage

```javascript
import PBackground from "./js/PBackground";

/**
 * Available modifiers
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
 * @param {number} lineModifier Distance of line when to connect , lower number shorter distance
 * */

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
