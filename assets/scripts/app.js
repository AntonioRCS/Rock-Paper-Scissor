const botaoPapel = document.getElementById('botao-papel');
const botaoPedra = document.getElementById('botao-pedra');
const botaoTesoura = document.getElementById('botao-tesoura');
const botaoReset = document.getElementById('botao-reset');

const menuComputador = document.getElementById('menu-computador');
const textoJogador = document.getElementById('texto-jogador');
const textoComputador = document.getElementById('texto-computador');

const secaoResultadoFinal = document.getElementById('resultado-final');
const textoVencedor = document.getElementById('texto-vencedor');

let resultadoFinal;

const vencedor = (escolhaJogador, escolhaComputador) => {
    if (escolhaJogador === escolhaComputador) return 'É um Empate!';
    else if ((escolhaJogador === 0 || escolhaJogador === 2) && (escolhaComputador === 0 || escolhaComputador === 2)) {
        if (escolhaJogador > escolhaComputador) return 'Você Perdeu!';
        else return 'Você Ganhou!';
    } else if (escolhaJogador > escolhaComputador) return 'Você Ganhou!';
    else return 'Você Perdeu!';
};

const mudarTexto = (escolhaJogador, escolhaComputador) => {
    textoJogador.innerHTML = `<h3>Jogador Escolheu: ${escolhaJogador}</h3>`;

    switch (escolhaComputador) {
        case 0:
            textoComputador.innerHTML = '<h3>Computador Escolheu: PAPEL</h3>';
            menuComputador.style.visibility = 'visible';
            break;
        case 1:
            textoComputador.innerHTML = '<h3>Computador Escolheu: TESOURA</h3>';
            menuComputador.style.visibility = 'visible';
            break;
        case 2:
            textoComputador.innerHTML = '<h3>Computador Escolheu: PEDRA</h3>';
            menuComputador.style.visibility = 'visible';
            break;
    }
};

const textoParaNumero = (texto) => {
    switch (texto) {
        case 'PAPEL': return 0;
        case 'TESOURA': return 1;
        case 'PEDRA': return 2;
        default: return 3;
    }
};

const alternarBotoes = (acao) => {
    if (acao === 'enabled') {
        botaoPapel.removeAttribute('disabled');
        botaoTesoura.removeAttribute('disabled');
        botaoPedra.removeAttribute('disabled');
    } else {
        botaoPapel.setAttribute(acao, true);
        botaoTesoura.setAttribute(acao, true);
        botaoPedra.setAttribute(acao, true);
    }
};

const calcularJogo = (evento) => {
    let escolhaJogador = evento.target.innerHTML.toUpperCase();
    const escolhaComputador = Math.floor(Math.random() * 3);

    mudarTexto(escolhaJogador, escolhaComputador);
    escolhaJogador = textoParaNumero(escolhaJogador);

    alternarBotoes('disabled');
    console.log(escolhaJogador, escolhaComputador);
    resultadoFinal = vencedor(escolhaJogador, escolhaComputador);
    console.log(resultadoFinal);
    textoVencedor.innerHTML = `<h2>${resultadoFinal}</h2>`;
    secaoResultadoFinal.style.visibility = 'visible';
};

const reiniciarJogo = () => {
    secaoResultadoFinal.style.visibility = 'hidden';
    menuComputador.style.visibility = 'hidden';
    alternarBotoes('enabled');
};

botaoPapel.addEventListener('click', calcularJogo);
botaoTesoura.addEventListener('click', calcularJogo);
botaoPedra.addEventListener('click', calcularJogo);
botaoReset.addEventListener('click', reiniciarJogo);
