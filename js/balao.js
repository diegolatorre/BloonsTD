function Balao(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
}

function newBalao(x, y, baloes) {
    var balao = new Balao(x, y);
    baloes.push(balao);
}

Balao.prototype.balaoRun = function (v) {
    this.y += v;
}

Balao.prototype.balaoDraw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.lineWeight = 2;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}


Balao.prototype.balaoOutScreen = function () {
    if (this.y > canvas.height) {
        this.removeBalao();
        perdeVida();
    }
}

Balao.prototype.removeBalao = function () {
    /*var x = fases[countFase].baloes.indexOf(this);
    fases[countFase].baloes.splice(x, 1);*/
    this.x = -10000000;
    this.y = -10000000;
}