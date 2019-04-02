function Tiro(x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
    this.circunferencia = (2 * Math.PI) * this.r;
}

function newTiro(x, y) {
    var tiro = new Tiro(x, y);
    tiros.push(tiro);
}

Tiro.prototype.tiroRun = function (ctx) {
    this.y -= 30;
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.lineWeight = 2;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}


Tiro.prototype.impactoBola = function () {
    for (let i = 0; i < blocos.length; i++) {
        var bloco = blocos[i];
        op1 = (Math.max(bloco.x, this.x) - Math.min(bloco.x, this.x)) ** 2;
        op2 = (Math.max(bloco.y, this.y) - Math.min(bloco.y, this.y)) ** 2;
        d = Math.sqrt(op1 + op2);
        if (d < bloco.r + this.r) {
            showCount();
            bloco.removeBloco();
            this.removeTiro();
        }
    }
}

Tiro.prototype.tiroOutScreen = function () {
    if (this.y < 0) {
        this.removeTiro();
        return;
    }
    return;
}

Tiro.prototype.removeTiro = function () {
    var x = tiros.indexOf(this);
    tiros.splice(x, 1);
    console.log('tiros: ' + tiros.length);
}