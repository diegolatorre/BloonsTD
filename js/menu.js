document.getElementById("maisIce").addEventListener("click", comprarCongelar);
document.getElementById("maisBala").addEventListener("click", comprarTiroRasante);
document.getElementById("maisGravidade").addEventListener("click", comprarGravidadeZero);
document.getElementById("setCongelar").addEventListener("click", usarCongelar);
document.getElementById("setTiroRasante").addEventListener("click", usarTiroRasante);
document.getElementById("setGravidadeZero").addEventListener("click", usarGravidadeZero);
document.getElementById("start").addEventListener("click", iniciar);

//Declarando o preco dos poderes
var valorCongelar = 1;
var valorVidaCheia = 100;
var valorDezVida = 1;
var valorTiroRasante = 1;
var valorGravidadeZero = 1;

//Declarando e recebendo o saldo atual
var saldo = 0;

function comprarCongelar() {
    if (saldo >= valorCongelar) {
        saldo -= valorCongelar;
        nCongelar += 1;
        document.getElementById("lblCongelar").innerHTML = nCongelar;
        document.getElementById("lblSaldo").innerHTML = saldo;
        return;
    }
    return;
}

function comprarTiroRasante() {
    if (saldo >= valorTiroRasante) {
        saldo -= valorTiroRasante;
        nTiroRasante += 1;
        document.getElementById("lblTiroRasante").innerHTML = nTiroRasante;
        document.getElementById("lblSaldo").innerHTML = saldo;
        return;
    }
    return;
}

function comprarGravidadeZero() {
    if (saldo >= valorGravidadeZero) {
        saldo -= valorGravidadeZero;
        nGravidadeZero += 1;
        document.getElementById("lblGravidadeZero").innerHTML = nGravidadeZero;
        document.getElementById("lblSaldo").innerHTML = saldo;
        return;
    }
    return;
}

function dezVida() {
    if (saldo >= valorDezVida) {
        saldo -= 10;
        life += 10;
        document.getElementById("life").innerHTML = life;
        document.getElementById("lblSaldo").innerHTML = saldo;
    }
}

function encheVida() {
    if (count >= 80) {
        count -= 100;
        life += 100;
        document.getElementById("life").innerHTML = life;
        document.getElementById("count").innerHTML = count;
    }
}

function usarTiroRasante() {
    if (nTiroRasante > 0) {
        if (tiroRasante == false) {
            tiroRasante = true;
            setTimeout(function () {
                usarTiroRasante();
            }, 1000 * 10);
            nTiroRasante -= 1;
            document.getElementById("lblTiroRasante").innerHTML = nTiroRasante;
            return;
        }
    }

    if (tiroRasante == true) {
        tiroRasante = false;
        return;
    }
}

function usarGravidadeZero() {
    if (nGravidadeZero > 0) {
        if (gravidadeZero == false) {
            velocidade = 0.2;
            gravidadeZero = true;
            setTimeout(function () {
                usarGravidadeZero();
            }, 1000 * 10);
            nGravidadeZero -= 1;
            document.getElementById("lblGravidadeZero").innerHTML = nGravidadeZero;
            return;
        }
    }

    if (gravidadeZero == true) {
        velocidade = 1;
        gravidadeZero = false;
        return;
    }
}

function usarCongelar() {
    if (nCongelar > 0) {
        if (congelar == false) {
            velocidade = 0;
            congelar = true;
            clearInterval(intervalo);
            setTimeout(function () {
                usarCongelar();
                velocidade = 1;
                congelar = false;
                intervalo = setInterval(function () {
                    fases[countFase].startFase();
                }, 1000);
            }, 1000 * 10);
            nCongelar -= 1;
            document.getElementById("lblCongelar").innerHTML = nCongelar;
            return;
        }
    }
}

function iniciar () {
    intervalo = setInterval(function () {
        fases[countFase].startFase();
    }, fases[countFase].tempo);
    fases[countFase].started = true;
    started = 1;
}
