document.getElementById("maisIce").addEventListener("click", comprarCongelar);
document.getElementById("maisBala").addEventListener("click", comprarTiroRasante);
document.getElementById("maisGravidade").addEventListener("click", comprarGravidadeZero);
document.getElementById("lifeDez").addEventListener("click", dezVida);
document.getElementById("lifeFull").addEventListener("click", encheVida);
document.getElementById("setCongelar").addEventListener("click", usarCongelar);
document.getElementById("setTiroRasante").addEventListener("click", usarTiroRasante);
document.getElementById("setGravidadeZero").addEventListener("click", usarGravidadeZero);
document.getElementById("start").addEventListener("click", iniciar);

//Declarando o preco dos poderes
var valorCongelar = 30;
var valorVidaCheia = 100;
var valorDezVida = 1;
var valorTiroRasante = 30;
var valorGravidadeZero = 50;

//Declarando e recebendo o saldo atual
var saldo = 500;

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
        document.getElementById("lblLife").innerHTML = life;
        document.getElementById("lblSaldo").innerHTML = saldo;
    }
}

function encheVida() {
    if (saldo >= valorVidaCheia) {
        saldo -= 1;
        life += 100;
    }

    if (life > 100) {
        life = 100;
        document.getElementById("lblLife").innerHTML = life;
        document.getElementById("lblSaldo").innerHTML = saldo;
    }
}

function usarTiroRasante() {
    if (nTiroRasante > 0) {
        if (tiroRasante == false) {
            tiroRasante = true;
            setTimeout(function () {
                tiroRasante = false;
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
            clearInterval(intervalo);
            intervalo = setInterval(function () {
                fases[countFase].startFase();
            }, fases[countFase].tempo * 3);
            setTimeout(function () {
                usarGravidadeZero();
                clearInterval(intervalo);
                intervalo = setInterval(function () {
                    fases[countFase].startFase();
                }, fases[countFase].tempo);
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
                velocidade = 1;
                congelar = false;
                intervalo = setInterval(function () {
                    fases[countFase].startFase();
                }, fases[countFase].tempo);
            }, 1000 * 10);
            nCongelar -= 1;
            document.getElementById("lblCongelar").innerHTML = nCongelar;
            return;
        }
    }
}

function iniciar() {
    intervalo = setInterval(function () {
        fases[countFase].startFase();
    }, fases[countFase].tempo);
    fases[countFase].started = true;
    started = 1;
}
