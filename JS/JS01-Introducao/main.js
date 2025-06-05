//todo navegador começa a leitura do codigo de cima para baixo
var idade
const ano = 1936
//JavaScript
console.log("Hello World") //aoresentar uma mensagem
console.clear() //limpar

//Variaveis - criar um espaço dentro do pc
var numero1 = 192
console.log(numero1)

var num1 = 4
var num2 = 4
var resultado = num1 + num2 //contas de mais sendo executado
console.log(resultado) 

idade = 89 //iniciar a variavel em outra parte do codigo
console.log(idade)

//ano = 1936
const PI = 3.14

//textos - strings
//var nome = " " ou '' é lido como texto
let nome1 = 'Matheus Araujo '
const nome2  = "Matheus Vinicuius "
var nome3 = '123456.789 ' //é um texto, por conta das aspas
console.log(nome1, nome2, nome3) //tudo numa linha ´so, ao inves de copiar
//console.log(nome2)
//console.log(nome3)

console.log("Olá" + "Papai") //Concatenar 1
console.log("Aluno " + nome1 + "e aluno" + nome2 + "Tem um total de " + nome3 + "dinheiros")   //concatenar 2

//Template string
console.log(`Aluno $(nome) e Aluno $(nome2) Tem um total de ${nome3} dinheiros`) //concatenar 3


console.log(10 / 0) //infinity


//Operadores 
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)

//Operadores relacionais
console.log(5 == 5)
console.log(5 > 5)
console.log(22 < 8)
console.log(22 >= 22)
console.log(22 != 23);
console.log('A' == 'B')
console.log('Ana' == 'ana')
console.log(true == false)
console.log(true === 'true') //boolean e o outro e txt > string
console.log(true != 'false') //true


let temCamisa = false
let temCracha = true
console.log(temCamisa)
console.log(temCracha)
console.log(temCamisa == true && temCracha == true) // false    ==     true = false          && = comparação de false or true
console.log(temCamisa == true || temCracha == true) // false     ou    true = true          || definição de mais flexibilidade




//var //flexivel e com menos regras (posso alterar o valor inicial de uma var e recriar a mesma em outrar partes do código)

//LET//vocÊ não pode recriar a mesma em outras partes do codigo com o mesmo nome, mas pode chamar e alterar o valor inicial

//CONST//Voce não pode recriar a mesma em outras partes do codigo ee não pode alterar valor inicial dela garantindo a confiança do dado que esta sendo utilizado no decorrer do seu codigo