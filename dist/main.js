/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/particles.js":
/*!*****************************!*\
  !*** ./src/js/particles.js ***!
  \*****************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d', {
  alpha: false
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particlesArray = [];
var mouse = {
  x: null,
  y: null,
  radius: canvas.height / 110 * (canvas.width / 110)
};
var runAnimation = {
  value: true
};
document.getElementById('canvas1').addEventListener('click', function () {
  runAnimation.value = !runAnimation.value;

  if (runAnimation.value) {
    animate();
  }
});
window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener('mouseout', function (e) {
  mouse.x = undefined;
  mouse.y = undefined;
});

var Particle = /*#__PURE__*/function () {
  function Particle(x, y, dirX, dirY, size, color) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isOnCanvasX()) {
        this.dirX = -this.dirX;
      }

      if (this.isOnCanvasY()) {
        this.dirY = -this.dirY;
      } //check collision


      this.checkCollision();
      this.x += this.dirX;
      this.y += this.dirY;
      this.draw();
    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius + this.size) {
        this.color = 'DarkOrange';

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
      } else {
        this.color = 'gold';
      }
    }
  }, {
    key: "isOnCanvasX",
    value: function isOnCanvasX() {
      return this.x > canvas.width || this.x < 0;
    }
  }, {
    key: "isOnCanvasY",
    value: function isOnCanvasY() {
      return this.y > canvas.height || this.y < 0;
    }
  }]);

  return Particle;
}();

function init() {
  particlesArray = [];
  var numberOfParticles = Math.floor(canvas.height * canvas.width / 9000);

  for (var i = 0; i < numberOfParticles; i++) {
    var size = Math.random() * 7 + 2;
    var x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    var y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    var dirX = Math.random() * 5 - 2.5;
    var dirY = Math.random() * 5 - 2.5;
    var color = 'gold';
    particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
  }
}

function animate() {
  if (runAnimation.value) {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }

    connect();
  }
}

function connect() {
  var opacity = 0.5;

  for (var i = 0; i < particlesArray.length; i++) {
    for (var j = i; j < particlesArray.length; j++) {
      var distance = (particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x) + (particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y);

      if (distance < canvas.width / 7 * (canvas.height / 7)) {
        opacity = 1 - distance / 20000;
        ctx.strokeStyle = "rgba(255, 215, 0, ".concat(opacity, ")");
        ctx.lineWidth = particlesArray[i].size / 5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

init();
animate();
window.addEventListener('resize', function (e) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = canvas.height / 100 * (canvas.height / 100);
  init();
});

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _js_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/particles.js */ "./src/js/particles.js");
/* harmony import */ var _js_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_particles_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map