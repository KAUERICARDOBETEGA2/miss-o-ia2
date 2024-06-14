const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é o comandante de um exército. Suas tropas estão encurraladas com poucos recursos e você tem apenas alguns jatos.",
        alternativas: [
            {
                texto: "Não há o que ser feito.",
                afirmacao: "Você deixa suas tropas morrerem. "
            },
            {
                texto: "Mando a tropa aérea.",
                afirmacao: "Se dermos um ataque aéreo, há a chance de atordoar o inimigo, mesmo que sejam baixas."
            }
        ]
    },
    {
        enunciado: "Você tem uma vantagem de números de seu exército e quer atacar uma base inimiga. Mesmo com vantagem numérica, eles tem vantagem de armamento.",
        alternativas: [
            {
                texto: "Você joga todas as suas tropas na linha de frente.",
                afirmacao: "Todas as suas tropas morrem, mas você gasta os recursos do inimigo."
            },
            {
                texto: "Você divide suas tropas para atacar o inimigo por todos os lados.",
                afirmacao: "Você invade a base inimiga e chama reforços. Houve muitas baixas."
            }
        ]
    },
    {
        enunciado: "A guerra esta quase ganha e o inimigo chama você para um congresso em um pedido para paz.",
        alternativas: [
            {
                texto: "Você nao vai e ataca o inimigo com tudo que tem, ganhando a guerra e território.",
                afirmacao: "Você nao ganha nenhum apoio dos cidadãos do país."
            },
            {
                texto: "Você vai ao congresso e aceita o pedido de paz.",
                afirmacao: "Você consegue um forte aliado com recursos vindos do próprio, transformando ele em um estado vassalo."
            }
        ]
    },
    {
        enunciado: "Você toma um ataque inimigo inesperado em uma cidade de seu país.",
        alternativas: [
            {
                texto: "Jogar uma bomba na capital inimiga.",
                afirmacao: "Você começa uma guerra com outros países."
            },
            {
                texto: "Tentar conversar e começar uma guerra se nada der certo..",
                afirmacao: "Você ganha aliados e alguns apoiadores."
            }
        ]
    },
    {
        enunciado: "Seu inimigo não tem mais como reagir. Você continua com o ataque? ",
        alternativas: [
            {
                texto: "Continuo o ataque e destruo a base inimiga.",
                afirmacao: "Voce ganha a guerra porem suas tropas morrem junto você nao é um estategista."
            },
            {
                texto: "Você inicia a proposta de paz sem segundas intenções junto a um termo para o representante do pais assinar.",
                afirmacao: "Voce consegue a paz e se torna uma potência mundial. Você é um estrategista."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
