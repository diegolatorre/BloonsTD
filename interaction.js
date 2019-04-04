function onMouseMove(ev) {
    barBottom.x = ev.x - Math.floor(barBottom.width / 2);
}

function onKeyDown(ev) {
    if (ev.keyCode == 39) { //Direita
        barBottom.x += 100;
    }

    if (ev.keyCode == 37) { //Esquerda
        barBottom.x -= 100;
    }

    if (ev.keyCode == 38) { //Cima
        newTiro(barBottom.x + barBottom.width / 2, barBottom.y);
    }
    
    if (ev.keyCode == 40) { //Baixo
        newBloco(barBottom.x + barBottom.width / 2, 0);
    }
    
    /*
    if (ev.keyCode == 71) { //G
        if (gPressed == false) {
            velocidade = 0.2;
            gPressed = true;
            return;
        } 
        
        if (gPressed == true) {
            velocidade = 1;
            gPressed = false;
            return;
        }
    }

    if (ev.keyCode == 80) { //P
        if (pPressed == false) {
            velocidade = 0;
            pPressed = true;
            return;
        } 
        
        if (pPressed == true) {
            velocidade = 1;
            pPressed = false;
            return;
        }
    }*/
}

    function onMouseDown() {
        newTiro(barBottom.x + barBottom.width / 2, barBottom.y);
    }