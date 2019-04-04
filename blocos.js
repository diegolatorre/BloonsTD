function Bloco(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.circunferencia = (2 * Math.PI) * this.r;
}

function newBloco(x, y) {
    var bloco = new Bloco(x, y);
    blocos.push(bloco);
}

Bloco.prototype.blocoRun = function (ctx) {
    this.y += velocidade;
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.lineWeight = 2;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}


Bloco.prototype.blocoOutScreen = function blocoOutScreen(bloco, blocos) {
    if (this.y < 0) {
        this.removeBloco();
    }
}

Bloco.prototype.removeBloco = function () {
    var x = blocos.indexOf(this);
    blocos.splice(x, 1);
    console.log('blocos: ' + blocos.length);
}