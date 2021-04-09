let cartas ;
let jogarMais;
let idRelogio ;
let tempo = 0;
let qtdcartas = (prompt("Com quantas cartas quer jogar ?"));
let primeiroPapagaio ;
let segundoPapagaio ;
let contadorJogadas = 0 ;
let jogando = 0;
const conteudoParrot = document.querySelector(".conteudo");
const conteudoTopo = document.querySelector(".topo")


confereNumero()
distribuirCartas()

function confereNumero(){
    while (qtdcartas < 4 || qtdcartas > 14 || qtdcartas%2 !== 0){
        qtdcartas = (prompt("Com quantas cartas quer jogar ?"))
    }
    
}

function distribuirCartas(){
    cartas = ["img/bobrossparrot.gif", "img/explodyparrot.gif",  "img/fiestaparrot.gif",  "img/metalparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif"] ;
    cartas = cartas.sort(comparador)
    cartas = cartas.slice(0,qtdcartas/2)
    cartas.forEach(element => {
        cartas.push(element)
    });
    cartas.sort(comparador)
    
    conteudoParrot.innerHTML = ""
    for(let i = 0; i < qtdcartas; i++){
        conteudoParrot.innerHTML += 
        `<div class=`+`dupla-carta` + `>
            <img src="img/front.png" class="envolucro1" onclick="vira(this)" alt="Carta virada pra cima">
            <img src=${cartas[i]} class="envolucro2 vira" onclick="vira(this)" alt="Carta virada pra cima">
        </div>`
    }   
}

function comparador() { 
	return Math.random() - 0.5; 
}


function vira(el){

    if(el.classList.contains("envolucro2") !== true && jogando === 0){
        
        const irmao = seuirmao(el,0)
        let escondidos = document.querySelectorAll(".envolucro2.vira")
        
        if (escondidos.length%2 !== 0){
            primeiroPapagaio = irmao
            if(contadorJogadas === 0){
            idRelogio = setInterval(relogio, 1000)
            }

        } else{
            contadorJogadas += 1
            segundoPapagaio = irmao
            if(primeiroPapagaio.getAttribute('src') !== segundoPapagaio.getAttribute('src')){
                jogando = 1
                setTimeout(errou, 1000, primeiroPapagaio,segundoPapagaio) 
            }
        }

        if (document.querySelectorAll(".envolucro2.vira").length === 0){
            clearTimeout(idRelogio)
            setTimeout(alert,100,`Você ganhou em ${contadorJogadas} jogadas e em ${tempo} segundos!`)
            setTimeout(function() {
                while(jogarMais !== "Sim" && jogarMais !== "Não"){
                    jogarMais = prompt("Quer jogar mais uma vez ? Sim ou Não")}
                    if(jogarMais === "Sim"){
                        reiniciarJogo() 
                    }}, 100)
                
                    
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

function relogio(){
    tempo += 1;
    conteudoTopo.innerHTML = `<span class="parrot">PARROT CARD GAME</span>
    <span class="tempo">${tempo}</span> `
}

function errou(primeiroPapagaio,segundoPapagaio){
    seuirmao(0,primeiroPapagaio)
    seuirmao(0,segundoPapagaio)
    jogando = 0
}

function reiniciarJogo(){
    jogarMais = 0
    qtdcartas = 0;
    contadorJogadas = 0
    tempo = 0
    conteudoTopo.innerHTML = `<span class="parrot">PARROT CARD GAME</span>
    <span class="tempo">0</span> `
    confereNumero()
    distribuirCartas()

}