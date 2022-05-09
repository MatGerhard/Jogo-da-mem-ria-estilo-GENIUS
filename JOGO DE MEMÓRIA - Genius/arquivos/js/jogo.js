let ordem = [];
let ordem_click = [];
let pontos = 0;

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');

function ordem_aleatoria(){
    ordem_cores = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordem_cores;
    ordem_click = [];

    for (i in ordem){
        elemento_cor = cria_elemento_cor(ordem[i]);
        acender(elemento_cor, Number(i) + 1);
        apagar(elemento_cor, Number(i) + 1);
    }
}
function acender(elemento, Number){
    Number = Number * 500;
    setTimeout(() => {
        elemento.classList.add('selecionado');
    }, Number - 250);
}
function apagar(elemento, Number){
    Number = (Number * 500) + 100;
    setTimeout(() => {
        elemento.classList.remove('selecionado');
    }, Number - 80);
}
function confere(){
    for(i in ordem_click){
        if(ordem_click[i] != ordem[i]){
            perdeu();
            break;
        }
    }
    if(ordem_click.length == ordem.length){
        alert('Pontuação: ' + pontos + '\nVocê conseguiu! Iniciando próximo nível!');
        prox_nivel();
    }
}
function click (color){
    ordem_click[ordem_click.length] = color;
    cria_elemento_cor(color).classList.add('selecionado');
    setTimeout(() => {
        cria_elemento_cor(color).classList.remove('selecionado');
        confere();
    },250);
}
function cria_elemento_cor(color){
    if (color == 0) {return azul;}
    else if (color == 1) {return amarelo;}
    else if (color == 2) {return vermelho;}
    else if (color == 3) {return verde;}
} 
function prox_nivel(){
    pontos++;
    ordem_aleatoria();
}
function perdeu(){
    alert('Você errou :c\nNíveis jogados: ' + pontos);
    ordem = [];
    ordem_click = [];
    iniciar();
}
function iniciar(){
    alert('Iniciando o jogo!');
    pontos = 0;
    prox_nivel();
}
azul.onclick = () => click(0);
amarelo.onclick = () => click(1);
vermelho.onclick = () => click(2);
verde.onclick = () => click(3);
iniciar();
