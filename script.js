const conteudoParrot = document.querySelector(".conteudo")

let qtdcartas = (prompt("Com quantas cartas quer jogar ?"))

while (qtdcartas < 4 || qtdcartas > 14 || qtdcartas%2 !== 0){
    qtdcartas = (prompt("Com quantas cartas quer jogar ?"))
}

for(let i = 0; i < qtdcartas; i++){
    conteudoParrot.innerHTML += `<div class="envolucro"><img src="img/front.png" alt="Carta virada pra cima"></div>`
}
