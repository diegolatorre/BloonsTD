function onMouseMove(ev) {
    barBottom.x = ev.x - Math.floor(barBottom.width / 2);
}

function onKeyDown(ev) {
    if (ev.keyCode == 49) { //1
        usarCongelar()
    }

    if (ev.keyCode == 50) { //1
        usarTiroRasante()
    }

    if (ev.keyCode == 51) { //1
        usarGravidadeZero()
    }
}

function onMouseDown() {
    newTiro(barBottom.x + 43, barBottom.y);
}