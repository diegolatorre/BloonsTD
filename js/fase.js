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
    newBalao(Math.floor(Math.random() * (597 - 3)) + 1, 0, this.baloes);
}

function iniciarFases() {
    newFase(10, 0.5, 1000);
    newFase(15, 0.5, 800);
    newFase(20, 1, 1000);
    newFase(25, 1, 800);
}