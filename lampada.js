const liga = document.getElementById('liga');
const desliga = document.getElementById('desliga');
const lampada = document.getElementById('lampada');

function lampadaQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1;
}

function ligaLampada(){
    if(!lampadaQuebrada()){
    lampada.src = './img/lampada-acesa.jpg';
    }
}

function desligaLampada () {
    if(!lampadaQuebrada()){
    lampada.src = './img/lampada-apagada.jpg';
    }
}

function quebraLampada () {
    lampada.src = './img/lampada-quebrada.jpg';
}

liga.addEventListener('click', ligaLampada);
desliga.addEventListener('click', desligaLampada);
lampada.addEventListener('mouseover', ligaLampada);
lampada.addEventListener('mouseleave', desligaLampada);
lampada.addEventListener('dblclick', quebraLampada)

