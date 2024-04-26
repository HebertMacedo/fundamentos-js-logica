alert('Boas-vindas ao jogo de número secreto');
let numeroMaximo = 30;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //Gera um número de 0 a 9 + 1 = 10
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


