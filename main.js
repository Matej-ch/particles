(()=>{"use strict";var i={587:(i,e,t)=>{const a={x:null,y:null,radius:1};function r(i,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}const n=function(){function i(e){var t=e.x,a=e.y,r=e.dirX,n=e.dirY,s=e.size,o=e.color,h=e.canvas,l=e.ctx,c=e.collisionColor,d=void 0===c?"DarkOrange":c;!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.x=t,this.y=a,this.dirX=r,this.dirY=n,this.size=s,this.color=o,this.canvas=h,this.ctx=l,this.collisionColor=d}var e,t;return e=i,(t=[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}},{key:"update",value:function(){this.isOnCanvasX()&&(this.dirX=-this.dirX),this.isOnCanvasY()&&(this.dirY=-this.dirY),this.checkCollision(),this.x+=this.dirX,this.y+=this.dirY,this.draw()}},{key:"checkCollision",value:function(){var i=a.x-this.x,e=a.y-this.y;Math.sqrt(i*i+e*e)<a.radius+this.size&&(this.color=this.collisionColor,a.x<this.x&&this.x<this.canvas.width-10*this.size&&(this.x+=2),a.x>this.x&&this.x>10*this.size&&(this.x-=2),a.y<this.y&&this.y<this.canvas.height-10*this.size&&(this.y+=2),a.y>this.y&&this.y>10*this.size&&(this.y-=2))}},{key:"isOnCanvasX",value:function(){return this.x>this.canvas.width||this.x<0}},{key:"isOnCanvasY",value:function(){return this.y>this.canvas.height||this.y<0}}])&&r(e.prototype,t),i}(),s=["AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","BlueViolet","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkKhaki","DarkMagenta","DarkOrange","DarkOrchid","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FloralWhite","ForestGreen","Fuchsia","GhostWhite","Gold","GoldenRod","GreenYellow","HoneyDew","HotPink","IndianRed","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSteelBlue","Lime","LimeGreen","Linen","Magenta","MediumAquaMarine","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MintCream","MistyRose","Moccasin","NavajoWhite","OldLace","Olive","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","Snow","SpringGreen","SteelBlue","TanC","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];function o(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function h(i,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}const l=function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.canvasSelector,r=void 0===t?"#canvas":t,n=e.mouseInteraction,s=void 0===n||n,h=e.mouseRadius,l=void 0===h?100:h,c=e.canvasW,d=void 0===c?window.innerWidth:c,u=e.canvasH,v=void 0===u?window.innerHeight:u,y=e.runAnimation,m=void 0===y?{value:!0}:y,p=e.particleCount,x=void 0===p?200:p,f=e.alpha,g=void 0===f||f,k=e.speedMod,M=void 0===k?5:k,w=e.bgColor,C=void 0===w?"black":w,S=e.lineColor,A=void 0===S?null:S,B=e.lineModifier,G=void 0===B?2e4:B;o(this,i),this.canvasSelector=r,this.canvas=document.querySelector(r),this.canvas.width=d,this.canvas.height=v,this.runAnimation=m,this.particlesArray=[],this.particleCount=x,this.alpha=g,this.speedMod=M,this.mouseInteraction=s,this.lineModifier=G,this.mouseInteraction&&(this.mouseRadius=l,a.radius=this.mouseRadius),this.lineColor=A?{r:A[0],g:A[1],b:A[2]}:{r:256*Math.random(),g:256*Math.random(),b:256*Math.random()},this.ctx=this.canvas.getContext("2d",{alpha:this.alpha}),this.canvas.style.cssText="background:".concat(C),this.initListeners()}var e,t;return e=i,(t=[{key:"initListeners",value:function(){var i=this;document.querySelector(this.canvasSelector).addEventListener("click",(function(){i.runAnimation.value=!i.runAnimation.value,i.runAnimation.value&&i.animate()})),this.mouseInteraction&&(window.addEventListener("mousemove",(function(i){a.x=i.x,a.y=i.y})),window.addEventListener("mouseout",(function(i){a.x=void 0,a.y=void 0}))),window.addEventListener("resize",(function(e){i.canvas.width=innerWidth,i.canvas.height=innerHeight,a.radius=i.canvas.height/i.mouseRadius*(i.canvas.height/i.mouseRadius),i.init()}))}},{key:"init",value:function(){this.particlesArray=[];for(var i=Math.floor(this.particleCount),e=s[Math.floor(Math.random()*s.length)],t=s[Math.floor(Math.random()*s.length)],a=0;a<i;a++){var r=7*Math.random()+2,o=Math.random()*(this.canvas.width-2*r-2*r)+2*r,h=Math.random()*(this.canvas.height-2*r-2*r)+2*r,l=Math.random()*this.speedMod-this.speedMod/2,c=Math.random()*this.speedMod-this.speedMod/2;this.particlesArray.push(new n({x:o,y:h,dirX:l,dirY:c,size:r,color:e,canvas:this.canvas,ctx:this.ctx,collisionColor:t}))}}},{key:"animate",value:function(){var i=this;if(this.runAnimation.value){requestAnimationFrame((function(){return i.animate()})),this.ctx.clearRect(0,0,innerWidth,innerHeight);for(var e=0;e<this.particlesArray.length;e++)this.particlesArray[e].update();this.connect()}}},{key:"connect",value:function(){for(var i=.5,e=0;e<this.particlesArray.length;e++)for(var t=e;t<this.particlesArray.length;t++){var a=(this.particlesArray[e].x-this.particlesArray[t].x)*(this.particlesArray[e].x-this.particlesArray[t].x)+(this.particlesArray[e].y-this.particlesArray[t].y)*(this.particlesArray[e].y-this.particlesArray[t].y);a<this.canvas.width/7*(this.canvas.height/7)&&(i=1-a/this.lineModifier,this.ctx.strokeStyle="rgba(".concat(this.lineColor.r,", ").concat(this.lineColor.g,", ").concat(this.lineColor.b,", ").concat(i,")"),this.ctx.lineWidth=this.particlesArray[e].size/5,this.ctx.beginPath(),this.ctx.moveTo(this.particlesArray[e].x,this.particlesArray[e].y),this.ctx.lineTo(this.particlesArray[t].x,this.particlesArray[t].y),this.ctx.stroke())}}}])&&h(e.prototype,t),i}();(i=t.hmd(i)).exports.PBackground=l}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var n=e[a]={id:a,loaded:!1,exports:{}};return i[a](n,n.exports,t),n.loaded=!0,n.exports}t.hmd=i=>((i=Object.create(i)).children||(i.children=[]),Object.defineProperty(i,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+i.id)}}),i),t(587)})();
//# sourceMappingURL=main.js.map