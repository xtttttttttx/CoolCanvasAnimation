/**
 * 产生随机整数
 * @param {} low
 * @param {*} high
 */
function randomIntFromRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

/**
 * 产生随机颜色
 * @param {} colors
 */
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * 鼠标点击，重绘
 */
window.addEventListener('mousedown', function (event) {
    init();
});

/**
 * 窗口大小改变时重绘
 */
window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


/**
 * 开始绘图
 */
let canvas = document.getElementById('mycanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

let colorArray = [
    '#4CBF88',
    '#F2B134',
    '#6F4A70',
    '#FF6275',
    '#00B5C4'
]

let Gravity = 0.8;
let Friction = 0.9;

function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }

    this.update = function () {
        if (this.y + this.radius + this.dy + Gravity > canvas.height) {
            this.dy = -this.dy;
            this.dy *= Friction;
            this.dx *= Friction;
        } else {
            this.dy += Gravity;
        }

        if (this.x + this.radius + this.dx >= canvas.width ||
            this.x - this.radius + this.dx <= 0) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


let ballArray;

function init() {
    ballArray = [];
    for (let i = 0; i < 200; i++) {
        let radius = randomIntFromRange(5, 15);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(radius, canvas.height - radius);
        let dx = randomIntFromRange(-5, 5);
        let dy = randomIntFromRange(1, 2);
        let color = randomColor(colorArray);
        ballArray.push(new Ball(x, y, dx, dy, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let ball of ballArray) {
        ball.update();
    }
}

init();
animate();