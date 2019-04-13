function Fase(n, v, baloes) {
    this.n = n;
    this.v = v;
    this.baloes = [];
}

function newFase(n, v) {
    var fase = new Fase(n, v);
    fases.push(fase);
}

Fase.prototype.startFase = function () {
    for (let i = 0; i < this.n; i++) {
        newBloco(Math.floor(Math.random() * (canvas.width - 1)) + 1, 0, this.baloes);
    }
}