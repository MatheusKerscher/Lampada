const ligaDesliga = document.getElementById('ligaDesliga');
const restaura = document.getElementById('restaura');
const lampada = document.getElementById('lampada');

function lampadaQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1;
}

function restauraLampada(){
    lampada.src = './img/lampada-apagada.jpg'
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

function ligaDesligaLampada(){
    if (ligaDesliga.textContent == 'Ligar'){
        ligaLampada();
        ligaDesliga.textContent = 'Desligar';
    }else {
        desligaLampada();
        ligaDesliga.textContent = 'Ligar';
    }
}

ligaDesliga.addEventListener('click', ligaDesligaLampada);
lampada.addEventListener('mouseover', ligaLampada);
lampada.addEventListener('mouseleave', desligaLampada);
lampada.addEventListener('dblclick', quebraLampada);
restaura.addEventListener('click', restauraLampada);

