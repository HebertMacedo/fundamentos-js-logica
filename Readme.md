# fundamentos-js-logica

Projeto de lógica de programação básica com JavaScript. Ideal para iniciantes, contém uma introdução à lógica de programação e um exemplo prático de jogo de adivinhação de número secreto.

### 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!

```
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
alert('Bom final de semana');
} else if (diaDaSemana == 'Domingo') {
alert('Bom final de semana');
} else {
alert('Boa semana!');

}
```

### 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

```
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
alert('Número positivo!');
} else {
alert('Número negativo!');
}
```

### 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.

```
pontuacao = 105;
if (pontuacao >= 100) {
console.log('Parabéns, você venceu!');
} else {
console.log('Tente novamente para ganhar.');
}
```

### 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

```
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

### 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
```

### 6. Desafio, ache o erro do loop while

```
let qtdNumeros = prompt('Digite a quantidade de notas para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
let numero = parseInt(prompt('Digite a nota:'));
soma += numero;
//contador--;
}

let media = soma / qtdNumeros;

console.log(`sua média é ${media}`);
```

### 7. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

```
let contador = 0;

while (contador < 10) {
contador++;
console.log(contador);

}
```

### 8. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

```
let contador = 10;

while (contador >= 1) {
console.log(contador);
contador--;
}
```

### 9. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

```
let contagemRegressiva = prompt('Digite um número para iniciar a contagem');
let contador = contagemRegressiva;

while (contador >= 0) {
console.log(contador);
contador--;
}
```

### 10. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

```
let contagemProgressiva = prompt('Digite um número para iniciar a contagem progessiva');
let contador = 0;

while (contador <= contagemProgressiva) {
console.log(contador);
contador++;
}
```

### 11. Exemplo utilizando o operador lógico AND (&&)

```
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
```

### 12. Exemplo utilizando o operador lógico OR (||)

```
let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}
```

### 13. Verifique se o usuário pode votar com base na idade fornecida.

```
let idade = prompt('Qual é a sua idade?');

if (idade >= 18) {
  alert('Você pode votar!');
} else {
  alert('Você ainda não pode votar.');
}
```

### 14. Crie um sistema de desconto com base no valor da compra.

```
let valorCompra = prompt('Qual é o valor da sua compra?');
let desconto;

if (valorCompra > 100) {
  desconto = valorCompra * 0.1;  //100x0,1
  alert(`Você ganhou um desconto de R$${desconto.toFixed(2)}.`);
} else {
  alert('Sem desconto para essa compra.');
}
```

### 15. Calcular o valor do frete grátis

```
let valorCompra = prompt('Qual é o valor da sua compra?');

if (valorCompra > 300){
  alert(`Parabéns você ganhou frete grátis.`);
} else {
  alert(`O frete para essa compra é R$10,00.`);
}

```

### 16. Verificar se o cliente tem direito a um brinde

```
let valorCompra = prompt('Qual é o valor da sua compra?');

if (valorCompra > 500){
  alert(`Parabéns! Você tem direito a um brinde especial.`);
} else {
  alert(`Sem brinde para essa compra.`);
}
```

### 17. Calcular o valor total da compra com desconto

```
let valorCompra = prompt('Qual é o valor da sua compra?');
let desconto;

if (valorCompra > 200){
  desconto = valorCompra * 0.15;
} else if (valorCompra > 100){
  desconto = valorCompra * 0.1;
} else {
  desconto = 0;
}

let total = valorCompra - desconto;
alert(`O valor total da sua compra com desconto de R$${desconto.toFixed(2)} é R$${total.toFixed(2)}.`);
```

### 18. Calcular a média das notas do aluno

```
let nota1 = parseFloat(prompt('Digite a primeira nota:'));
let nota2 = parseFloat(prompt('Digite a segunda nota:'));
let nota3 = parseFloat(prompt('Digite a terceira nota:'));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    alert(`Parabéns, você foi aprovado sua média é ${media.toFixed(1)}`);
} else if (media >= 6) {
    alert(`Você está de recuperação, sua média é ${media.toFixed(1)}`);
} else {
    alert(`Você foi reprovado, sua média é ${media.toFixed(1)}`);
}
```

### 19. 4: Dia da Semana

```
let dia = prompt('Que dia da semana é hoje?');

switch (dia.toLowerCase()) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        alert('Dia de trabalho.');
        break;
    case 'sábado':
    case 'domingo':
        alert('Final de semana!');
        break;
    default:
        alert('Dia inválido.');
}

```
