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

function tiroRasante() {
    tiroRasante = true;
}