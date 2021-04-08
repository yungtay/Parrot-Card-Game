const cartas = ["img/bobrossparrot.gif", "img/bobrossparrot.gif", "img/explodyparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/metalparrot.gif", "img/revertitparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif", "img/unicornparrot.gif"] ;
const conteudoParrot = document.querySelector(".conteudo");
let relogio ;
let tempo = 0;
let qtdcartas = 4//(prompt("Com quantas cartas quer jogar ?"));
let primeiroPapagaio ;
let segundoPapagaio ;
let contadorJogadas = 0 ;
let jogando = 0;


topo = document.querySelector(".topo")
topo.innetHTML = `PARROT CARD GAME`

while (qtdcartas < 4 || qtdcartas > 14 || qtdcartas%2 !== 0){
    qtdcartas = (prompt("Com quantas cartas quer jogar ?"))
}

const cartasDoJogo = cartas.slice(0,qtdcartas)
cartasDoJogo.sort(comparador)

for(let i = 0; i < qtdcartas; i++){
    conteudoParrot.innerHTML += 
    `<div class=`+`dupla-carta` + `>
        <img src="img/front.png" class="envolucro" onclick="vira(this)" alt="Carta virada pra cima">
        <img src=${cartasDoJogo[i]} class="envolucro vira" onclick="vira(this)" alt="Carta virada pra cima">
    </div>`
}

function vira(el){

    if(el.nextElementSibling !== null && jogando === 0){
        
        const irmao = seuirmao(el,0)
        let escondidos = document.querySelectorAll(".vira:last-child")
        
        if (escondidos.length%2 !== 0){
            primeiroPapagaio = irmao
            if(contadorJogadas === 0){
            relogio = setInterval(timer, 1000)
            }

        } else{
            contadorJogadas += 1
            segundoPapagaio = irmao
            if(primeiroPapagaio.getAttribute('src') !== segundoPapagaio.getAttribute('src')){
                jogando = 1
                setTimeout(errou, 1000, primeiroPapagaio,segundoPapagaio) 
            }
        }

        if (document.querySelectorAll(".vira:last-child").length === 0){
            alert(`Você ganhou em ${contadorJogadas} jogadas e em ${tempo} segundos!`)
            clearTimeout(relogio)
            jogarMais = prompt("Quer jogar mais uma vez ?")
        }
    }   
}

function seuirmao(el1,el2){
    
    if (el1 !== 0){
        const irmao = el1.nextElementSibling
        el1.classList.toggle("vira")
        irmao.classList.toggle("vira")
        return irmao

    } else{
        const irmao = el2.previousElementSibling
        el2.classList.toggle("vira")
        irmao.classList.toggle("vira")
    }   
}

function errou(primeiroPapagaio,segundoPapagaio){
    seuirmao(0,primeiroPapagaio)
    seuirmao(0,segundoPapagaio)
    jogando = 0
}

function comparador() { 
	return Math.random() - 0.5; 
}

function timer(){
    tempo += 1;
    document.querySelector(".tempo").innerHTML = tempo;
}