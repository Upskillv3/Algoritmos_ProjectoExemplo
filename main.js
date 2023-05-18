const QUESTIONS = require("./questions_db")

const {obterRespostasCertas,obterTotalRespostas,media,printModa} = require("./estatisticas")

const prompt = require("prompt-sync")()


/**
 * Aqui vamos as respostas dos participantes
 */
var respostas_participantes = []

//Interação com os participantes
while(true){

    console.log("Bem-vindo ao UpSkill Quizz")

    /**
     * Imprime cada pergunta
     */
    let respostas = []

    for(var i = 0; i < QUESTIONS.length; i++){
        
        var q = QUESTIONS[i]

        //Imprime a pergunta
        console.log(q[0])

        const RES = ["a)","b)","c)","d)"]

        //Imprime as opções de resposta
        for( var j = 0; j < q[1].length; j++){
            console.log(`${RES[j]} ${q[1][j]}`)
        }

        //Aguardamos a resposta do utilizador à pergunta e validamos se essa resposta 
        //foi a, b, c ou d
        do{
            var resposta = prompt("Indique a resposta:")
            if(resposta != "a" && resposta != "b" && resposta != "c" && resposta != "d"){
                console.log("Ups! A resposta têm de ser a, b, c ou d.")
            }
        }while( resposta != "a" && resposta != "b" && resposta != "c" && resposta != "d")

        //Guardar a resposta do utilizador
        respostas.push(resposta)

    }

    //Guardo na matriz que contêm as respostas de todos os participantes
    respostas_participantes.push(respostas)

    console.log("Muito obrigado!")

    do{
        var existe = prompt("Existe algum participante em espera: s/n ?")
    }while(existe != "s" && existe != "n")

    if(existe=="n"){
        break;
    }

}

//Mostrar as estatisticas do questionário
console.log("\nEstastisticas\n")

//Médias do questionário inteiro
console.log(`Média de respostas certas: ${(media(obterRespostasCertas(respostas_participantes),obterTotalRespostas(respostas_participantes.length))*100).toFixed(2)} %`)
console.log(`Média de respostas erradas: ${100-(media(obterRespostasCertas(respostas_participantes),obterTotalRespostas(respostas_participantes.length))*100).toFixed(2)} %`)
console.log()

for(var i = 0; i<QUESTIONS.length;i++){

    console.log(`Questão ${i+1}`)

    var count_respostas = respostas_participantes.length
    var count_certas = 0

    var count_a = 0
    var count_b = 0
    var count_c = 0
    var count_d = 0

    for(var j=0;j<respostas_participantes.length;j++){
        if(respostas_participantes[j][i] == QUESTIONS[i][2]){
            count_certas++
        }
        if(respostas_participantes[j][i]  == "a"){
            count_a++
        }else if(respostas_participantes[j][i]  == "b"){
            count_b++
        }else if(respostas_participantes[j][i]  == "c"){
            count_c++
        }else{
            count_d++
        }
    }

    var arr_aux = [count_a,count_b,count_c,count_d]
    var maior_indice = 0

    for(var j = 0; j < arr_aux.length;j++){
        if( arr_aux[maior_indice] < arr_aux[j]){
            maior_indice = j
        }
    }

    console.log(`\tMédia certas: ${(media(count_certas,count_respostas)*100).toFixed(2)} %.`)
    console.log(`\tMédia erradas: ${100-(media(count_certas,count_respostas)*100).toFixed(2)} %.`)

  
    printModa(maior_indice)

}
