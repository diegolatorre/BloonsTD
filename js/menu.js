document.getElementById("maisIce").addEventListener("click", comprarCongelar);
document.getElementById("maisBala").addEventListener("click", comprarTiroRasante);
document.getElementById("maisGravidade").addEventListener("click", comprarGravidadeZero);

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

function setTiroRasante() {
    if (count >= 10) {
        if (tiroRasante == false) {
            count -= 10;
            tiroRasante = true;
            return;
        }

        if (tiroRasante == true) {
            tiroRasante = false;
            return;
        }
    }
}

function setGravidadeZero() {
    if (count >= 10) {
        if (gravidadeZero == false) {
            count -= 10;
            velocidade = 0.2;
            gravidadeZero = true;
            return;
        }

        if (gravidadeZero == true) {
            velocidade = 1;
            gravidadeZero = false;
            return;
        }
    }
}

function setCongelar() {
    if (count >= 10) {
        if (congelar == false) {
            count -= 10;
            velocidade = 0;
            congelar = true;
            return;
        }

        if (congelar == true) {
            velocidade = 1;
            congelar = false;
            return;
        }
    }
}
