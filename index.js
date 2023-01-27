let main = document.querySelector(`main`)
let section = document.querySelector(`sectio`)
let visor = document.getElementById(`visor`)
let placar = document.getElementById(`placar`)

var nomeJogador1 = ``
var opcaoJogador1 = ``
var nomeJogador2 = ``
var opcaoJogador2 = ``
let jogadores = [nomeJogador1, nomeJogador2]

let vezDoJogador1 = ``
let vezDoJogador2 = ``

let comecar = ``

const erro = `[ERRO] Escolha outra casa Vazia, Por favor.`

let pontosJogador1 = 0
let pontosJogador2 = 0
let pontosVelha = 0

let vencedorPartida = ``

let indice = 0

//tema
let btnSwitchTheme = document.getElementById(`theme`).addEventListener(`click`, function(){
    const root = document.querySelector(`:root`)
    const labelTheme = document.getElementById(`themeLabel`)
    let body = document.querySelector(`body`)
       if (body.dataset.theme ===`light`) {
        root.style.setProperty(`--bg-color`,`#000`)
        root.style.setProperty(`--color`,`#f00`)
        body.dataset.theme=`dark`
        labelTheme.innerText=`Tema Dark`
       } else {
        root.style.setProperty(`--bg-color`,`#fff`)
        root.style.setProperty(`--color`,`#000`)
        body.dataset.theme=`light`
        labelTheme.innerText=`Tema Light`
       }
})

let btnIniciar = document.querySelector(`#btnIniciar`)
    btnIniciar.addEventListener(`click`, function(ev) {
        document.getElementById(`btnIniciar`).style.display=`none`

    let label1 = document.createElement(`label`)
        label1.innerHTML= `<label for="jogador1">Qual o nome do Primeiro Jogador? </label>`
    let jogador1 = document.createElement(`input`)
        jogador1.type= `text`
        jogador1.id= `jogador1`
        jogador1.autocomplete=`off`
        jogador1.style.borderRadius=`20px`
        jogador1.style.padding=`10px`
        jogador1.style.textTransform=`capitalize`
    var btnJogador2 = document.createElement(`button`)
        btnJogador2.innerText = `Próximo Jogador`
        btnJogador2.classList=`btn btn-outline-danger`
        btnJogador2.style.marginTop=`10px`
        btnJogador2.id=`btnSeguir`

    let paragrafo = document.createElement(`p`)
        paragrafo.innerText=`Você escolhe ser: `
    let switcOpcao = document.createElement(`input`)
        switcOpcao.type=`checkbox`
        switcOpcao.classList= `form-check-input`
        switcOpcao.id=`switchOpcao`
    opcaoJogador1 = `O`
    let opcaoSwitch = document.createElement(`div`)
        opcaoSwitch.classList=`form-switch`
        opcaoSwitch.role=`switch`
    opcaoSwitch.append(switcOpcao)

    let opcaoX = document.createElement(`span`)
        opcaoX.innerHTML=`<label id="x" for="switchOpcao"> X</label>`
    let opcaoO = document.createElement(`span`)
        opcaoO.innerHTML=`<label id="o" for="switchOpcao"> O</label>`

    let divOpcao = document.createElement(`div`)
        divOpcao.id=`divOpcao`
    divOpcao.append(opcaoO, opcaoSwitch, opcaoX)
    
    
    section.append(label1, jogador1, document.createElement(`br`), paragrafo, divOpcao, document.createElement(`br`), btnJogador2)
    jogador1.focus()


//button seguir
    btnJogador2.addEventListener(`click`, function(){
    //dados jogador 1
        if (switcOpcao.checked) {
            switcOpcao.value = `X`
            opcaoJogador1 = switcOpcao.value
        }else {
            switcOpcao.value = `O`
            opcaoJogador1 = switcOpcao.value
        }   
        if (jogador1.value.length == 0) {
            alert(`[ERRO] Digite um nome para o Jogador`)
            return
        } else{
            nomeJogador1 = jogador1.value
            label1.innerHTML= `<label for="jogador1">Qual o nome do Segundo Jogador? </label>`
            console.log(`ATé Aqui tudo OK \n Nome: ${nomeJogador1} \n Opção: ${opcaoJogador1}`)
            jogador1.value = `` 
            jogador1.focus()
            switcOpcao.style.display=`none`
        }
        if (opcaoJogador1 === `X`) {
            opcaoJogador2 = `O`
            paragrafo.innerText=`Você será:`
            opcaoX.style.display=`none`
            divOpcao.id=`divOpcaoTextCenter`
            opcaoO.innerHTML=`<label id="o2" for="switchOpcao"> O</label>`
        } else {
            opcaoJogador2 = `X`
            paragrafo.innerText=`Você será:`
            opcaoO.style.display=`none`
            divOpcao.id=`divOpcaoTextCenter`
            opcaoX.innerHTML=`<label id="x2" for="switchOpcao"> X</label>`
        } 
        btnJogador2.style.display=`none`
            //2 jogador
        let btnSeguir = document.createElement(`button`)
            btnSeguir.innerText = `Seguir`
            btnSeguir.id=`btnSeguir`
            btnSeguir.classList=`btn btn-outline-danger`
            btnSeguir.style.marginTop=`10px`

        section.appendChild(btnSeguir).addEventListener(`click`,function(){
            if (jogador1.value.length == ``) {
                alert(`[ERRO] Digite um Nome válido`)
                jogador1.focus()
                return
            } else {
                nomeJogador2 = jogador1.value
                vezDoJogador1 = `É a vez de ${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)}`
                vezDoJogador2 = `É a vez de ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)}`
            }
            console.log(`Nome do jogador 1: ${nomeJogador1} Opção: ${opcaoJogador1} \n Nome do Jogador 2: ${nomeJogador2} Opção: ${opcaoJogador2}`)
            section.style.display=`none`
            main.style.display=`block`
            
            quemComeça()
        }) 
    })
})

//sorteio de quem começa
function quemComeça (){
    comecar = Math.floor(Math.random() * 10)
    console.log(`O número sorteado foi ${comecar}`)
    if (comecar === 1 || comecar === 3 || comecar === 5 || comecar === 7 || comecar === 9) {
        visor.innerText = vezDoJogador1
        comecar = vezDoJogador1
    } else {
        visor.innerText = vezDoJogador2
        comecar= vezDoJogador2
    }
}   


//marcar casa
let casaA = document.querySelector(`.casaA`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaA= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaA = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaB = document.querySelector(`.casaB`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaB= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaB = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaC = document.querySelector(`.casaC`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaC= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaC = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaD = document.querySelector(`.casaD`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaD= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaD = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaE = document.querySelector(`.casaE`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaE= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaE = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaF = document.querySelector(`.casaF`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaF= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaF = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaG = document.querySelector(`.casaG`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaG= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaG = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaH = document.querySelector(`.casaH`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaH= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaH = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})
let casaI = document.querySelector(`.casaI`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && vencedorPartida === ``) {
        if (comecar === vezDoJogador1 ) {
            casaI= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
            indice++
            vencedor()
        } else {
            casaI = opcaoJogador2
            buttonTarget.innerText = opcaoJogador2
            comecar = vezDoJogador1 
            visor.innerText = comecar
            indice++
            vencedor()
        }
        return
    }else {
        alert(erro)
    }
})


let btnJogarNovamente = document.createElement(`button`)
    btnJogarNovamente.innerText=`Jogar Novamente`
    btnJogarNovamente.classList=`btn btn-outline-danger`
    btnJogarNovamente.style.marginTop=`20px`

//vencedor
function vencedor() {
    //tres opcoes de vitoria
    if (casaA === `X` && casaB === `X` && casaC === `X`) {
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaA === `O` && casaB === `O` && casaC === `O`) {
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    if (casaA === `X` && casaD === `X` && casaG === `X`) {
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaA === `O` && casaD === `O` && casaG === `O`) {
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    if (casaA === `X` && casaE === `X` && casaI === `X`) {
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaA === `O` && casaE === `O` && casaI === `O`) {
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    //duas opcoes de vitoria
    if (casaE === `X` && casaB === `X` && casaH === `X`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaE === `O` && casaB === `O` && casaH === `O`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorO()
        }
    if (casaE === `X` && casaD === `X` && casaF ===`X`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaE === `O` && casaD === `O` && casaF ===`O`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    //duas opcoes de vitoria
    if (casaG === `X` && casaE === `X` && casaC === `X`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaG === `O` && casaE === `O` && casaC === `O`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        document.getElementById(`casaI`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    if (casaG === `X` && casaH === `X` && casaI === `X`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaG === `O` && casaH === `O` && casaI === `O`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaC`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaF`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    //uma opcao de vitoria
    if (casaI === `X` && casaF === `X` && casaC === `X`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        opcaoVencedorX()
    }
    if (casaI === `O` && casaF === `O` && casaC === `O`) {
        document.getElementById(`casaA`).style.visibility=`hidden`
        document.getElementById(`casaB`).style.visibility=`hidden`
        document.getElementById(`casaD`).style.visibility=`hidden`
        document.getElementById(`casaE`).style.visibility=`hidden`
        document.getElementById(`casaG`).style.visibility=`hidden`
        document.getElementById(`casaH`).style.visibility=`hidden`
        opcaoVencedorO()
    }
    //velha
    if (indice === 9) {
        visor.innerText=`Deu Velha, ou EMPATE, Ningém Ganhou!`
		placar.appendChild(btnJogarNovamente)
        pontosVelha++
        placar.innerText = `${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} : ${pontosJogador1} pontos \n ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} : ${pontosJogador2} pontos \n Empates :${pontosVelha} \n`
        placar.append(btnJogarNovamente)
    }
}
        

function opcaoVencedorX() {
    if (opcaoJogador1 === `X`){
        vencedorPartida = `Jogador(a) ${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} Venceu! \n Parabéns!\n`
        visor.innerText = vencedorPartida
        pontosJogador1++

        placar.innerText = `${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} : ${pontosJogador1} pontos \n ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} : ${pontosJogador2} pontos \n Empates :${pontosVelha} \n`
        placar.append(btnJogarNovamente)
    } else {
        vencedorPartida =`Jogador(a) ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} Venceu! \n Parabéns!\n`
        visor.innerText = vencedorPartida
        pontosJogador2++

        placar.innerText = `${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} : ${pontosJogador1} pontos \n ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} : ${pontosJogador2} pontos \n Empates :${pontosVelha} \n`
        placar.append(btnJogarNovamente)
    }
}
function opcaoVencedorO() {
    if (opcaoJogador1 === `O`){
        vencedorPartida = `Jogador(a) ${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} Venceu! \n Parabéns!\n`
        visor.innerText = vencedorPartida
        pontosJogador1++

        placar.innerText = `${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} : ${pontosJogador1} pontos \n ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} : ${pontosJogador2} pontos \n Empates :${pontosVelha} \n`
        placar.append(btnJogarNovamente)
    } else {
        vencedorPartida =`Jogador(a) ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} Venceu! \n Parabéns!\n`
        visor.innerText = vencedorPartida
        pontosJogador2++

        placar.innerText = `${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)} : ${pontosJogador1} pontos \n ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)} : ${pontosJogador2} pontos \n Empates :${pontosVelha} \n`
        placar.append(btnJogarNovamente)
    }
}

//Jogar novamente
btnJogarNovamente.addEventListener(`click`, function () {
    casaA = ``
    casaB = ``
    casaC = ``
    casaD = ``
    casaE = ``
    casaF = ``
    casaG = ``
    casaH = ``
    casaI = ``
        document.getElementById(`casaA`).innerText = ``
    document.getElementById(`casaA`).style.visibility=`visible`
        document.getElementById(`casaB`).innerText= ``
    document.getElementById(`casaB`).style.visibility=`visible`
        document.getElementById(`casaC`).innerText=``
    document.getElementById(`casaC`).style.visibility=`visible`
        document.getElementById(`casaD`).innerText = ``
    document.getElementById(`casaD`).style.visibility=`visible`
        document.getElementById(`casaE`).innerText = ``
    document.getElementById(`casaE`).style.visibility=`visible`
        document.getElementById(`casaF`).innerText = ``
    document.getElementById(`casaF`).style.visibility=`visible`
        document.getElementById(`casaG`).innerText = ``
    document.getElementById(`casaG`).style.visibility=`visible`
        document.getElementById(`casaH`).innerText = ``
    document.getElementById(`casaH`).style.visibility=`visible`
        document.getElementById(`casaI`).innerText = ``
    document.getElementById(`casaI`).style.visibility=`visible`
    quemComeça()
    visor.innerText = comecar
    vencedorPartida = ``
})
