function dezVida() {
    if (count >= 10) {
        count -= 10;
        life += 10;
        document.getElementById("life").innerHTML = life;
        document.getElementById("count").innerHTML = count;
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
