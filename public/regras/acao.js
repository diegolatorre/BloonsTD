function comprarCongelar() {
    document.getElementById("lblMaisIce").innerHTML = maisIce;
    nCongelar += 1;
}

function comprarTiroRasante() {
    document.getElementById("lblMaisBala").innerHTML = maisBala;
    nTiroRasante += 1;
}

function comprarGravidadeZero() {
    document.getElementById("lblMaisGravidade").innerHTML = maisGravidade;
    nGravidadeZero += 1;
}


//Declarando o preco dos poderes
var maisIce = 30;
var maisBala = 30;
var maisGravidade = 30;
var limitePoder = 10;

//Declarando e recebendo o saldo atual
var saldo = 100;

function maisIce() {

    if (saldo >= maisIce) {
        saldo = saldo - maisIce;
        ice++;

        atualizaSaldo();
        atualizaIce();
    }

}

function maisBala() {

    if (saldo >= maisBala) {
        saldo = saldo - maisBala;
        bala++;

        atualizaSaldo();
        atualizaBala();
    }

}

function maisGravidade() {

    if (saldo >= maisGravidade) {
        saldo = saldo - maisGravidade;
        gravidade++;

        atualizaSaldo();
        atualizaGravidade();
    }

}
