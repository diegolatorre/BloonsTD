function Tiro(x, y) {
    this.x = x;
    this.y = y;
    this.r = 15;
}

function newTiro(x, y) {
    var tiro = new Tiro(x, y);
    tiros.push(tiro);
}

Tiro.prototype.tiroRun = function (ctx) {
    this.y -= 10;
    ctx.beginPath();
    //ctx.fillStyle = 'blue';
    ctx.lineWeight = 1;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.drawImage(imgDardo, this.x - 15, this.y - 15, 30, 30);
    //ctx.fill();
    //ctx.stroke();
    ctx.closePath();
}


Tiro.prototype.impactoBola = function (ctx) {
    for (let i = 0; i < fases[countFase].baloes.length; i++) {
        var balao = fases[countFase].baloes[i];
        if (fases[countFase].baloes[i]) {
            op1 = (Math.max(balao.x, this.x) - Math.min(balao.x, this.x)) ** 2;
            op2 = (Math.max(balao.y, this.y) - Math.min(balao.y, this.y)) ** 2;
            d = Math.sqrt(op1 + op2);
            if (d < balao.r + this.r) {
                showCount();
                popSound.play();
                balao.removeBalaoImpacto(ctx);
                this.removeTiro();
            }
        }
    }
}

Tiro.prototype.impactoBolaRasante = function (ctx) {
    for (let i = 0; i < fases[countFase].baloes.length; i++) {
        var balao = fases[countFase].baloes[i];
        if (fases[countFase].baloes[i]) {
            op1 = (Math.max(balao.x, this.x) - Math.min(balao.x, this.x)) ** 2;
            op2 = (Math.max(balao.y, this.y) - Math.min(balao.y, this.y)) ** 2;
            d = Math.sqrt(op1 + op2);
            if (d < balao.r + this.r) {
                showCount();
                popSound.play();
                balao.removeBalaoImpacto(ctx);
            }
        }
    }
    this.tiroOutScreen();
}

Tiro.prototype.tiroOutScreen = function () {
    if (this.y < 0) {
        this.removeTiro();
        return true;
    }
    return false;
}

Tiro.prototype.removeTiro = function () {
    var x = tiros.indexOf(this);
    tiros.splice(x, 1);
}
