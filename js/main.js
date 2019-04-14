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

var gravidadeZero = false;

var congelar = false;

var tiroRasante = false;

var nGravidadeZero = 0;

var nCongelar = 0;

var nTiroRasante = 0;

var count = 0;

var countFase = 0;

var life = 100;

var started = 1;

var tiros = [];

var fases = [];

var intervalo;

function init() {
    //EVENTO DO MOUSE
    canvas.addEventListener('mousemove', onMouseMove, false);

    //ClIQUE DO MOUSE
    canvas.addEventListener('mousedown', onMouseDown, false);

    // EVENTOS DO TECLADO
    document.addEventListener('keydown', onKeyDown, false);

    newFase(20, 1);
    //fases[0].startFase();
    console.log(fases.length);
    console.log(fases[0].baloes.length);

    var ctx = setupCanvas(document.querySelector('canvas'));
    barBottom.y = canvas.height - barBottom.height;
    setInterval(draw, 1000 / 60);
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

    console.log(fases[0].baloes.length);
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

    if (fases[countFase].started == true) {
        intervalo = setInterval(function () {
            fases[0].startFase();
        }, 1000);
        fases[countFase].started = false;
    }

    if (fases[countFase].baloes.length >= fases[countFase].n) {
        clearInterval(intervalo);
        //started = 0;
    }

    if (fases[countFase].baloes.length != 0) {
        for (let i = 0; i < fases[countFase].baloes.length; i++) {
            fases[countFase].baloes[i].balaoDraw(ctx);
            fases[countFase].baloes[i].balaoRun(fases[countFase].v);
            fases[countFase].baloes[i].balaoOutScreen();
        }
    }

    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.fillRect(barBottom.x, barBottom.y, barBottom.width, barBottom.height);
    //ctx.restore();
}

function showCount() {
    count++;
    saldo++;
    document.getElementById("lblPontos").innerHTML = count;
    document.getElementById("lblSaldo").innerHTML = saldo;
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
        document.getElementById("lblLife").innerHTML = life;
    } else {
        document.getElementById("lblLife").innerHTML = life;
    }
}

function startGame() {
    started = true;
}