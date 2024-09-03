

document.addEventListener('DOMContentLoaded', function() {
const numero = document.getElementById('numeros');
const botaoAdiciona = document.getElementById('botao1');
const botaoSubtrai = document.getElementById('botao2');
const botaoParar = document.getElementById('botao3');
const resultado = document.getElementById('resultado');


let valor = 0;
let valorArmazenado = null;
let operacoesRealizadas = false;

function atualizaContador(){
    numero.textContent = valor;
}

function atualizarResultado() {
    if (valorArmazenado !== null) {
        const soma = valorArmazenado + valor;
        const subtracao = valorArmazenado - valor;
        const multiplicacao = valorArmazenado * valor;
        const divisao = valorArmazenado / valor;

        resultado.innerHTML = `
            <strong>Valor Armazenado:</strong> ${valorArmazenado}<br>
            <strong>Valor Atual:</strong> ${valor}<br>
            <strong>Soma:</strong> ${soma}<br>
            <strong>Subtração:</strong> ${subtracao}<br>
            <strong>Multiplicação:</strong> ${multiplicacao}<br>
            <strong>Divisão:</strong> ${divisao.toFixed(2)}
        `;
    }
}

botaoAdiciona.addEventListener('click', function(){
    valor++;
    atualizaContador();
})
botaoSubtrai.addEventListener('click', function(){
    valor--;
    atualizaContador();
})
botaoParar.addEventListener('click', function(){
    if (valorArmazenado === null) {
        // Armazena o valor atual
        valorArmazenado = valor;
        resultado.innerHTML = 'Valor armazenado: ' + valorArmazenado;
    } else {
        // Armazena o valor atual e calcula operações
        atualizarResultado();
        valorArmazenado = null; // Reseta o valor armazenado para começar um novo ciclo
        resultado.innerHTML += '<br>Valor armazenado resetado para novo ciclo.';
    }
    atualizaContador();


});

atualizaContador();
});