// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();

//barra inferior do jogo
var barBottom = { x: 100, y: 300, width: 100, height: 10 };

var velocidade = 1;

var gPressed = false;

var pPressed = false;

var tiroRasante = false;

var count = 0;

var life = 100;

var started = 1;

var tiros = [];

var blocos = [];

function init() {
    //EVENTO DO MOUSE
    canvas.addEventListener('mousemove', onMouseMove, false);

    //ClIQUE DO MOUSE
    canvas.addEventListener('mousedown', onMouseDown, false);

    // EVENTOS DO TECLADO
    document.addEventListener('keydown', onKeyDown, false);

    var ctx = setupCanvas(document.querySelector('canvas'));
    barBottom.y = canvas.height - barBottom.height;
    setInterval(draw, 0.51);
}

function draw() {
    if (!started) {
        return;
    }

    if (life <= 0) {
        gameOver();
    }

    var ctx = setupCanvas(document.querySelector('canvas'));
    var ctx = canvas.getContext('2d');

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //ctx.save();

    if (tiros.length != 0) {
        for (var t = 0; t < tiros.length; t++) {
            tiros[t].tiroRun(ctx);
            if (!tiros[t].tiroOutScreen() && tiroRasante == true) {
                tiros[t].impactoBolaRasante();
            }
            if (typeof tiros[t] !== 'undefined' && !tiros[t].tiroOutScreen()) {
                tiros[t].impactoBola();
            }
        }
    }

    if (blocos.length != 0) {
        for (let i = 0; i < blocos.length; i++) {
            blocos[i].blocoRun(ctx, velocidade);
            blocos[i].blocoOutScreen();
        }
    }

    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.fillRect(barBottom.x, barBottom.y, barBottom.width, barBottom.height);
    //ctx.restore();
}

function showCount() {
    count++;
    document.getElementById("count").innerHTML = count;
}

function gameOver() {
    var ctx = setupCanvas(document.querySelector('canvas'));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("canvas").style.backgroundColor = 'rgb(255, 0, 0)';
    started = false;
}

function perdeVida() {
    life -= 15;
    if (life < 0) {
        life = 0;
        document.getElementById("life").innerHTML = life;
    } else {
        document.getElementById("life").innerHTML = life;
    }
}

function startGame() {
    started = true;
}
