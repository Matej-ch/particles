const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particlesArray = [];

const colors = [
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'TanC',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
]

let mouse = {
  x:null,
  y:null,
}

const maxSize = 40;
const minSize = 0;
const mouseRadius = 60;

window.addEventListener('mousemove',e => {
  mouse.x = e.x;
  mouse.y = e.y;
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
    if(this.isOutsideWidthBoundary()) {
      this.dirX = -this.dirX;
    }

    if(this.isOutsideHeightBoundary()) {
      this.dirY = -this.dirY;
    }

    this.x += this.dirX;
    this.y += this.dirY;

    //mouse interaction
    if(mouse.x - this.x < mouseRadius &&
      mouse.x - this.x > -mouseRadius &&
      mouse.y - this.y < mouseRadius &&
      mouse.y - this.y > -mouseRadius ) {
      if(this.size < maxSize) {
        this.size += 3;
      }
    } else if(this.size > minSize) {
      this.size -= 0.1;
    }
    if(this.size < 0) {
      this.size = 0;
    }
    this.draw();
  }

  isOutsideHeightBoundary() {
    return this.y + this.size * 2 > canvas.height || this.y - this.size * 2 < 0;
  }

  isOutsideWidthBoundary() {
    return this.x + this.size * 2 > canvas.width || this.x - this.size * 2 < 0;
  }
}

function init() {

  for(let i =0;i <1000; i++) {
    let size = 0;
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);

    let dirX = (Math.random() * 0.2) - 0.1;
    let dirY = (Math.random() * 0.2) - 0.1;

    let color = colors[Math.floor(Math.random() * colors.length)];
    particlesArray.push(new Particle(x,y,dirX,dirY,size,color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth,innerHeight);

  for (let i =0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

init();
animate();


//resize event
window.addEventListener('resize',e => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
})

//remove mouse position
setInterval(_ => {
  mouse.x = undefined;
  mouse.y = undefined;
},1000);
