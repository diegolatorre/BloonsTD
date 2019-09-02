function onMouseMove(ev) {
    barBottom.x = ev.x - ((20*screen.width)/100);
}

function onKeyDown(ev) {
    if (ev.keyCode == 49) { //1
        usarCongelar()
    }

    if (ev.keyCode == 50) { //2
        usarTiroRasante()
    }

    if (ev.keyCode == 51) { //3
        usarGravidadeZero()
    }
}

function onMouseDown() {
    newTiro(barBottom.x + 43, barBottom.y);
}