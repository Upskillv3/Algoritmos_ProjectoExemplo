
const QUESTIONS = 
[
    [
        "De que cor é o céu?",
        ["azul","vermelho","preto","cinzento"],
        "a"
        
    ],
    [
        "Qual a cor original de um Ferrari?",
        ["amarelo","vermelho","cinzento","verde"],
        "b"
    ],
    [
        "Qual opção corresponde ao Fibonacci?",
        ["03123","33123","011235","1345"],
        "c"
    ]
]

/**
 * Esta função irá verificar se existêm perguntas
 * na base de dados com o formato incorrecto.
 */
function validarDB(){
    for(var i=0; i < QUESTIONS.length; i++){
        var q = QUESTIONS[i]
        //Vamos ver o formato de cada questão onde vamos confirmar se o tamanho é 3, se a pergunta é do tipo String
        // Se existêm 4 respostas e se a resposta é do tipo string
        if( !(q.length == 3 && typeof(q[0]) == "string" &&
        q[1].length == 4 && typeof(q[2]) == "string")
        ){
            console.log("ERRO: O programa não pode iniciar porque o ficheiro questions não está bem formatado.")
            process.exit(1)
        }
    }
}
validarDB()

/**
 * Para usarmos as questões noutro ficheiro é necessário exportar a variável.
 * Neste caso não queremos exportar o validarDB se fosse necessário ficaria:
 * module.exports = QUESTIONS, validarDB
 */
module.exports = QUESTIONS