const lamp = document.getElementById("lamp");

function ligar() {    
    lamp.src = 'lampada-ligada.png';
    lamp.alt = 'Lampada ligouuu';   
}

function desligar() {    
    lamp.src = 'lampada-desligada.png';
    lamp.alt = 'Lampada desligou';   
}

/** 
const btnliga = document.getElementById("liga");
btnliga.addEventListener("click",liga());

const btndesliga = document.getElementById("desliga");
btndesliga.addEventListener("click",desligar());
*/