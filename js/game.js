let respostaCorreta;
let pontuacao = 0;
let modoAtual = "basico";

function iniciarJogo(modo) {
    modoAtual = modo;
    document.getElementById("area-jogo").style.display = "block";
    gerarPergunta();
}

function gerarPergunta() {
    const numeros = gerarNumeros(modoAtual);
    const operacao = escolherOperacao();
    const pergunta = `${numeros.num1} ${operacao} ${numeros.num2}`;

    respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operacao);

    document.getElementById("pergunta").innerText = pergunta;
    document.getElementById("resposta").value = "";
    document.getElementById("resultado").innerText = "";
}

function gerarNumeros(modo) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (modo === "desafio") {
        num1 *= 3;
        num2 *= 3;
    }

    return { num1, num2 };
}

function escolherOperacao() {
    const operacoes = ["+", "-", "*"];
    return operacoes[Math.floor(Math.random() * operacoes.length)];
}

function calcularResposta(num1, num2, operacao) {
    if (operacao === "+") return num1 + num2;
    if (operacao === "-") return num1 - num2;
    if (operacao === "*") return num1 * num2;
}

function verificarResposta() {
    const respostaUsuario = parseInt(document.getElementById("resposta").value);

    if (respostaUsuario === respostaCorreta) {
        document.getElementById("resultado").innerText = "✅ Resposta Correta!";
        pontuacao += 10;
    } else {
        document.getElementById("resultado").innerText = `❌ Errado! A resposta era ${respostaCorreta}`;
        pontuacao -= 5;
    }

    document.getElementById("pontuacao").innerText = pontuacao;
    gerarPergunta();
}