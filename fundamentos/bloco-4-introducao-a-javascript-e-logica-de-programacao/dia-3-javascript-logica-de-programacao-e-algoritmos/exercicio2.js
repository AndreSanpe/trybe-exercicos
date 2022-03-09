// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'trybe';
let letters = [];
// let reverseWord =''; Soluçao do exercício
let textRev = '';

for (let i = 0; i < word.length; i++){
    letters.unshift(word[i]);
}
textRev = letters.join('');
console.log("A palavra " + word +" invertida é: " + textRev);

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord); Solução Gabarito
