//barra inferior do jogo
var barBottom = { x: 100, y: 300, width: 100, height: 10 };

var velocidade = 5;

var count = 0;

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
    setInterval(draw, 50);
}

function draw() {
    if (!started) {
        return;
    }

    var ctx = setupCanvas(document.querySelector('canvas'));
    var ctx = canvas.getContext('2d');

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //ctx.save();

    if (tiros.length != 0) {
        for (var t = 0; t < tiros.length; t++) {
            tiros[t].tiroRun(ctx);
            tiros[t].tiroOutScreen();
            tiros[t].impactoBola();
        }
    }

    if (blocos.length != 0) {
        for (let i = 0; i < blocos.length; i++) {
            blocos[i].blocoRun(ctx);
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
    changeBackground();
}

function changeBackground() {
    corR = Math.floor(Math.random() * 255);
    corG = Math.floor(Math.random() * 255);
    corB = Math.floor(Math.random() * 255);
    document.getElementById("canvas").style.backgroundColor = 'rgb(' + corR + ',' + corG + ',' + corB + ', 0.3)';
}

function gameOver() {
    var ctx = setupCanvas(document.querySelector('canvas'));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("canvas").style.backgroundColor = 'rgb(255, 0, 0)';
    started = false;
}

function startGame() {
    started = true;
}
