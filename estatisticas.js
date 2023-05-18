const QUESTIONS = require("./questions_db")

//Para o questionario todo e para cada pergunta:

//Média das respostas certas = Qtd Respostas Certas / Qtd Respostas todas
//Média das respostas erradas = Qtd Respostas Erradas / Qtd Respostas todas

//Moda de cada resposta -> 
//Ver quantas respostas houve para cada opção de resposta e mostrar a maior.


function media(somatorio,quantidade){
    return somatorio/quantidade
}

/**
 * Este método consegue a partir de uma matriz de respostas indicar a quantidade de certas
 * @param {*} respostas  -> Matriz com as respostas do utilizadores
 * @returns a quantidade de certas
 */
function obterRespostasCertas(respostas){
    count_certas = 0
    for( var i = 0; i < respostas.length; i++){
        for(var j = 0; j < respostas[i].length; j++){
            if(QUESTIONS[j][2] == respostas[i][j]){
                count_certas++
            }
        }
    }
    return count_certas
}

/**
 * Devolve o total de repostas
 * @param {*} nParticipantes 
 * @returns o total de respostas
 */
function obterTotalRespostas(nParticipantes){
    return QUESTIONS.length * nParticipantes
}

/**
 * Função serve para imprimir a moda de cada pergunta 
 * @param {*} maior_indice -> Indice da resposta mais respondida
 */
function printModa(maior_indice){
    switch(maior_indice){
        case 0:
            console.log(`\tModa: a)`)
            break
        case 1:
            console.log(`\tModa: b)`)
            break
        case 2:
            console.log(`\tModa: c)`)
            break
        case 3:
            console.log(`\tModa: d)`)
            break
        default:
            console.log("ERRO: Desconhecido")
            process.exit(1)
    }
}
module.exports = {obterRespostasCertas,obterTotalRespostas,media,printModa}