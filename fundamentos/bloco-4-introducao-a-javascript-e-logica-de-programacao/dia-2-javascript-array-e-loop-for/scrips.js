let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
for(let i = 0; i <= numbers.length-1; i++){
    // console.log(numbers[i]);
    sum += numbers[i];

}
// console.log("soma: " + sum);
let med = sum / numbers.length;
console.log("Média: "+med);

if (med <= 20){
    console.log("Valor é menor que 20!");
}
else{
    console.log("Valor é maior que 20");
}
console.log("O número de números é: "+numbers.length);

let maiorValor = numbers[0];

for(let index = 1; index < numbers.length; index++){
    if(numbers[index]>maiorValor){
        maiorValor = numbers[index];
    }
}
console.log("O maior Valor é: "+ maiorValor);

let compareNum = numbers[0];
let oddNum = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 !== 0){
oddNum++
    }
}
console.log("O número de números ímpares é: "+oddNum);

let smolestValue = numbers[0];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < smolestValue){
    smolestValue=numbers[i];    
    }
}
console.log("O menor valor é: "+ smolestValue);
