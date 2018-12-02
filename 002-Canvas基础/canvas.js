let canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 75);

// ctx.moveTo(10, 10);
// ctx.lineTo(100, 100);
// ctx.stroke();

ctx.arc(50, 50, 30, 0, Math.PI, false);
ctx.stroke();