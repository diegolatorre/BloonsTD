function Fase(n, v) {
    this.n = n;
    this.v = v;
    this.baloes = [];
    this.started = true;
}

function newFase(n, v) {
    var fase = new Fase(n, v);
    fases.push(fase);
}

Fase.prototype.startFase = function () {
    newBalao(Math.floor(Math.random() * (597 - 3)) + 1, 0, this.baloes);
}

Fase.prototype.comecar = function () {

}