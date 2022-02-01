//Tipos de dados

//Boolean
// var boolean = true;
// console.log(`A variável tem valor ${boolean} é do tipo ${typeof(boolean)}`);

// //String
// var name = 'Jean';
// console.log(`A variável tem valor ${name} é do tipo ${typeof(name)}`);

// //number
// var number = 10;
// console.log(`A variável tem valor ${number} é do tipo ${typeof(number)}`);

// //Boolean
// var funcao = function () {};
// console.log(`A variável tem valor ${funcao} é do tipo ${typeof(funcao)}`);

/*

var - variável de escopo global ou local

let - variável de escopo local 

const - variável de escopo local - valor inicial obrigatório

*/

// var nome = "Martinha";
// nome = "Martinha Proa";
// console.log(nome);

// let nome2 = "Martinha";
// nome = "Martola Proa";
// console.log(nome2);

// const constante = "martola";
// constante = 'marta'; // não aceita o 2o valor

function nomeDaFuncao() {
    var aula = "Proa";
    console.log(aula);
}
nomeDaFuncao();


function nomeDaFuncaoLocal() {
    let aulaLocal = "Proa Local";
    console.log(aulaLocal);
}
nomeDaFuncaoLocal();


//Operadores
//Atribuição
var atribui = "Jeje";
console.log(atribui)

//Comparação
var compara = "0" == 0;
console.log(compara) // False

//Comparação Idêntica
var compara2 = "0" === 0;
console.log(compara2) //False

//Operadores Aritméticos

var adicao = 1 + 1;
console.log(adicao);

var subtracao = 5 - 2;
console.log(subtracao);

var multiplicacao = 5 * 2;
console.log(multiplicacao);

var divisao = 10 / 2;
console.log(divisao);

var divisaoInt = 9 % 2; //resto
console.log(divisaoInt);

var exponenciacao = 3 ** 3; //resto
console.log(exponenciacao);

var b = 4;
var incre = ++b; //incremento
console.log(incre);

var decre = --b; //decremento
console.log(decre)

// Operadores Relacionais
var maior = 5 > 2;
console.log(maior);

var menor = 5 < 2;
console.log(menor);

var maiorIgual = 5 >= 2;
console.log(maiorIgual);

var menorIgual = 5 <= 2;
console.log(menorIgual);

// Operadores Lógicos
var and = true && true;
console.log(and);

var ou = true || false;
console.log(ou);

var negativa = !false; //inverte
console.log(negativa);