const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d', { alpha: false });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export {canvas,ctx};
