// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let biggestNumber = 0;

for (let i = 2; i < 50; i += 1) {
    if (i % 2 != 0) {
        biggestNumber = i;

    }
}
console.log('O maior número primo entre 1 e 50 é: ' + biggestNumber);
