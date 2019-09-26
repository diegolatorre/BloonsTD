function Fase(n, v, tempo) {
    this.n = n;
    this.v = v;
    this.baloes = [];
    this.started = false;
    this.tempo = tempo;
}

function newFase(n, v, tempo) {
    var fase = new Fase(n, v, tempo);
    fases.push(fase);
}

Fase.prototype.startFase = function () {
    newBalao(Math.floor(Math.random() * (597 - 8)) + 8, 0, this.baloes);
}

function iniciarFases() {
    newFase(10, 0.5, 500);
    newFase(15, 1, 400);
    newFase(20, 2, 500);
    newFase(25, 2.5, 500);
    newFase(40, 3, 400);
    newFase(60, 3.5, 400);
    newFase(60, 4, 350);
    newFase(50, 5, 200);
    newFase(50, 6, 300);
    newFase(50, 7, 300);
    newFase(50, 4, 300);
    newFase(50, 4, 300);
    newFase(50, 4, 300);
    newFase(50, 4, 300);
}