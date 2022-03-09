// exercício 1

// let a = 10;
// let b = 11;

// let adicao = (a + b);
// console.log(adicao);


// let subtracao = (a - b);
// console.log(subtracao);

// let multiplicacao = (a * b);
// console.log(multiplicacao);

// let divisao = (a / b);
// console.log(divisao);

// let modulo = (a % b);
// console.log(modulo);

// exercíco 2

// const c = 30;
// const d = 20;

// if (c>d){
//     console.log("C é maior que D");
// }
// else if (c<d){
//     console.log("D é maior que C");
// }
// else{
//     console.log("As constantes são iguais");
// }

//exercício 3


// const a = 6;
// const b = 4;
// const c = 2;

// if (a > b && a > c) {
//   console.log('O maior número é: ' + a + ' (a)');
// } else if (b > a && b > c) {
//   console.log('O maior número é: ' + b + ' (b)');
// } else {
//   console.log('O maior número é: ' + c + ' (c)');
// }
//exercício 4

// const a = 1;

// if (a > 0) {
//     console.log("positivo");
// }
// else if (a == 0) {
//     console.log("zero");

// }
// else {console.log("negativo")};

//exercício 5

// const angA = 50;
// const angB = 70;
// const angC = 70;

// if(angA + angB + angC == 180){
//     console.log("true");
// }
// else {
//     console.log("false");
// }

//Exercício 6
// nomeDaPaca = "pião";
// let lowerCase = nomeDaPaca.toLowerCase();
// console.log(lowerCase);

// if (lowerCase == "bispo"){
//     console.log("Diagonal livre");
// }
// else if (lowerCase == "cavalo"){
//     console.log("Movimento em 'L', 2 e 3 casas");
// }
// else if (lowerCase == "torre"){
//     console.log("Horizontal e Vertical livre");
// }
// else if (lowerCase == "rainha"){
//     console.log("Todas as direções livres");
// }
// else if (lowerCase == "rei"){
//     console.log("todas as direções 1 casa");
// }
// else if (lowerCase == "pião"){
//     console.log("Primeiro movimento pode ser uma ou duas casas e todas as demais somente uma e só captura peças na diagonal")
// }
// else{
//     console.log("Erro! Essa peça não existe no nosso banco de dados");
// }

// Exercício 7

// let nota = 89;

// if (nota >= 90 && nota <= 100){
//     console.log("Nota A");
// }
// else if (nota >=80 && nota <90){
//     console.log("Nota B");
// }
// else if (nota >=70 && nota <80){
//     console.log("Nota C");
// }
// else if (nota >=60 && nota <70){
//     console.log("Nota D");
// }
// else if (nota >=50 && nota <60){
//     console.log("Nota E");
// }
// else if (nota <50 && nota > 0){
//     console.log("Nota F");
// }
// else {
//     console.log("Erro, nota não é possível de ser computada!!!");
// }

// Exercício 8
// let A = 11;
// let B = 21;
// let C = 21;

// if (A%2 === 0 || B%2 === 0 || C%2 === 0){
//     console.log(true);
// }
// else {console.log(false);
// }


// ======================================================================= Exercicios dia 4.2! =======================\/
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf("Portfólio");


// console.log(menuServices);
// menu.push('Contato');
// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (let index = 0; index < groceryList.length; index++) {
//     console.log("Comida:" + groceryList[index]);
// }


// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
//     for(let wichtName of names){
//         console.log(wichtName);
//     }
// ===============================================Exercícios 4.2 ˆˆˆˆˆˆˆ======================
// Exercicio 9
// let A = 10;
// let B = 20;
// let C = 21;

// if (A%2 != 0 || B%2 != 0 || C%2 != 0){
//     console.log(true);
// }
// else {console.log(false);
// }

// Exercício 10

// const custoProduto = -1;
// const valorVenda = 200;

// if (custoProduto < 0 || valorVenda < 0) {
//     console.log("Error, os valores náo podem ser negativos");
// }
// else{
//     let custoTotal = custoProduto * 1.2;
//     let valorLucro = ( valorVenda - custoTotal ) * 1000;
//     console.log("O lucro na venda de 1000 protudos é: "+ valorLucro);
// }

// Exercício 11
let salarioBruto = 12000;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;


if (salarioBruto <= 1556.94) {
    inss = salarioBruto - salarioBruto * 0.08;
    }
    else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        inss = salarioBruto * 9 / 100;
        console.log("O valor de INSS é: "+inss);
    }
    else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        inss = salarioBruto * 11 / 100;
        console.log("O valor de INSS é: "+inss);
    }
    else if (salarioBruto > 5189.82) {
        inss = 570.88;
        console.log("O valor de INSS é: "+inss);
    }

if (salarioBruto <= 1903.98){
    ir = 0;
    console.log("O valor de IR é: "+ir+" porque a pessoa é isenta de IR");
    }   
    else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65){
        ir = salarioBruto * 7.5 / 100 - 142.80;
        console.log("O valor de IR é: "+ir+" com um desconto de 142.80");
    }
    else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05){
        ir = salarioBruto * 15 / 100 - 354.80;
        console.log("O valor de IR é: "+ir+" com um desconto de 354.80");
    }
    else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68){
        ir = salarioBruto * 22.5 / 100 - 636.13;
        console.log("O valor de IR é: "+ir+" com um desconto de 636.13");
    }
    else if (salarioBruto > 4664.68){
        ir = salarioBruto * 27.5 / 100 - 869.36;
        console.log("O valor de IR é: "+ir+" com um desconto de 869.36");
    }



salarioLiquido = salarioBruto - inss - ir;

// https://www.youtube.com/watch?v=nLDWeTz3Zgc

// Math.around will around every thing. Then you need to multiply by the number that you want then divide using dot to specify how much decimal cases you what
console.log("O salário Líquido é: " + Math.round(salarioLiquido*100)/100.00);

