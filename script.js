const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(". texto-resultado");

const perguntas = [
    {
    enunciado:"Seu fim de semana ideal seria",
    alternativas: [
        "Fazer algo diferente e sair da rotina",
        "Ficar em casa e aproveitar o descanso"
        
    ]
},
{
    enunciado:"Quando surge um problema, você:",
    alternativas: [
        "Age rapidamente e resolve na hora",
        "Pensa com calma antes de tomar uma decisão"
        
    ]
},
{
    enunciado:" Em uma viagem, você prefere:",
    alternativas: [
        "Explorar lugares novos sem muito planejamento",
        "Ter tudo planejado e saber o que esperar"
        
    ]
},
{
    enunciado:"Seus amigos provavelmente diriam que você é:",
    alternativas: [
        "Espontâneo(a) e cheio(a) de energia",
        "Calmo(a) e equilibrado(a)"
        
    ]
},

    ];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas [atual]
}
