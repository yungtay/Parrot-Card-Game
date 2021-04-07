const cartas = ["img/bobrossparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif"] 
const conteudoParrot = document.querySelector(".conteudo")
let qtdcartas = (prompt("Com quantas cartas quer jogar ?"))
let primeiroPapagaio ;
let segundoPapagaio ;
let contador = 0 ;

while (qtdcartas < 4 || qtdcartas > 14 || qtdcartas%2 !== 0){
    qtdcartas = (prompt("Com quantas cartas quer jogar ?"))
}

for(let i = 0; i < qtdcartas; i++){
    conteudoParrot.innerHTML += 
    `<div class=`+`dupla-carta${i}` + `>
        <img src="img/front.png" class="envolucro" onclick="vira(this)" alt="Carta virada pra cima">
        <img src=${cartas[i]} class="envolucro esconde" onclick="vira(this)" alt="Carta virada pra cima">
    </div>
    <div class=`+`dupla-carta${i}` + `>
    <img src="img/front.png" class="envolucro" onclick="vira(this)" alt="Carta virada pra cima">
    <img src=${cartas[i]} class="envolucro esconde" onclick="vira(this)" alt="Carta virada pra cima">
    </div>`
}
function vira(el){

if(el.nextElementSibling !== null){
    
    const irmao = seuirmao(el,0)
    let escondidos = document.querySelectorAll(".esconde:last-child")
    
    if (escondidos.length%2 !== 0){
        primeiroPapagaio = irmao

    } else{
        contador += 1
        segundoPapagaio = irmao
        setTimeout(acertou, 1000, primeiroPapagaio,segundoPapagaio);
    }

    if (document.querySelectorAll(".esconde:last-child").length === 0){
        alert(`Você ganhou em ${contador} jogadas!`)
    }
}   
}

function seuirmao(el1,el2){
    
    if (el1 !== 0){
        const irmao = el1.nextElementSibling
        el1.classList.toggle("esconde")
        irmao.classList.toggle("esconde")
        return irmao

    } else{
        const irmao = el2.previousElementSibling
        el2.classList.toggle("esconde")
        irmao.classList.toggle("esconde")
    }   
}

function acertou(primeiroPapagaio,segundoPapagaio){
    if(primeiroPapagaio.getAttribute('src') !== segundoPapagaio.getAttribute('src')){
        seuirmao(0,primeiroPapagaio)
        seuirmao(0,segundoPapagaio)
    }
}
