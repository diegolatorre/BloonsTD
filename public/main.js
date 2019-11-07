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
var barBottom = { x: 0, y: 0 };

//velocidade para GravidadeZero e Congelar
var velocidade = 0;

//se gravidadeZero está ativo
var gravidadeZero = false;

//se congelar está ativo
var congelar = false;

var tiroRasante = false;

var nGravidadeZero = 0;

var nCongelar = 0;

var nTiroRasante = 0;

var count = 0;

var countFase = 1;

var life = 100;

var started = 1;

var tiros = [];

var fases = [];

var intervalo;

var imgDardo = new Image();
imgDardo.src = 'img/dardo.png';

var imgMonkey = new Image();
imgMonkey.src = 'img/monkey.png';

var imgMonkeyAtirando = new Image();
imgMonkeyAtirando.src = 'img/monkeyAtirando.png';

var imgBalao = new Image();
imgBalao.src = 'img/balao.png';

var canvasBackground = new Image();
canvasBackground.src = 'img/canvasBackground.png';

var imgPow = new Image();
imgPow.src = 'img/pow.png';

var popSound = new Audio();
popSound.src = 'sound/pop.mp3';

function init() {

    var ctx = setupCanvas(document.querySelector('canvas'));
    var ctx = canvas.getContext('2d');

    //EVENTO DO MOUSE
    canvas.addEventListener('mousemove', onMouseMove, false);

    //ClIQUE DO MOUSE
    canvas.addEventListener('mousedown', onMouseDown, false);

    // EVENTOS DO TECLADO
    document.addEventListener('keydown', onKeyDown, false);

    iniciarFases();

    barBottom.x = 0;
    barBottom.y = canvas.offsetHeight - 50;

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

    ctx.drawImage(canvasBackground, 0, 0, canvas.width, canvas.height);

    if (tiros.length != 0) {
        for (var t = 0; t < tiros.length; t++) {
            tiros[t].tiroRun(ctx);
            if (tiroRasante == true) {
                tiros[t].impactoBolaRasante(ctx);
            }
            if (typeof tiros[t] !== 'undefined' && tiroRasante == false) {
                tiros[t].impactoBola(ctx);
            }
        }
    }

    if (fases[countFase].baloes.length >= fases[countFase].n) {
        clearInterval(intervalo);
    }

    if (verificaFinalFase() && fases[countFase].started) {
        fases[countFase].started = false;
        countFase += 1;
        document.getElementById("fase").innerHTML = countFase;
    }

    if (fases[countFase].baloes.length != 0) {
        for (let i = 0; i < fases[countFase].baloes.length; i++) {
            if (fases[countFase].baloes[i]) {
                if (congelar || gravidadeZero) {
                    fases[countFase].baloes[i].balaoDraw(ctx, velocidade);
                    fases[countFase].baloes[i].balaoOutScreen();
                } else {
                    fases[countFase].baloes[i].balaoDraw(ctx, fases[countFase].v);
                    fases[countFase].baloes[i].balaoOutScreen();
                }
            }
        }
    }

    ctx.beginPath();
    ctx.drawImage(imgMonkey, barBottom.x, barBottom.y, 50, 50);
    ctx.closePath();

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

function verificaFinalFase() {
    let verifica = 0;
    for (let i = 0; i < fases[countFase].baloes.length; i++) {
        if (!fases[countFase].baloes[i]) {
            verifica += 1;
        }
    }

    if (verifica == fases[countFase].n) {
        return true;
    } else {
        return false;
    }
}