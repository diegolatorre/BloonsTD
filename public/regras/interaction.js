function onMouseMove(ev) {
    var mouseX = ev.x - (((screen.width / 12) * 2) + canvasBackground.offsetLeft + 53);
    barBottom.x = mouseX;
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

function onMouseDown(ev) {
    newTiro(barBottom.x + 43, barBottom.y);
    console.log(ev.x);
}