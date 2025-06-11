//"A" //Caracter
//"ola" // Texto - String
var texto1 ="Olá IOS"
//          0 1 2 3 4 5 6 --- Caracteres do "Olá IOS"
var resultado1 = texto1.charAt(6) //posição dos carácteres na saída do terminal
console.log(resultado1)
var resultado2 = texto1[1] //COLCHETES { } SUBSTITUI A charAt
console.log(resultado2)


var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(lorem.length)
// console.log(lorem.length >= 500) //contador de caractéres .lenght - >= retornar true ou false se tem uma certa quantidade de caractéres

var texto2 = "OLÁ TEC DE TECNOLOGIA"
var texto3 = "olá, meu nome e ia, seu amigo"

//formato 1
var resultado3 = texto2.toLowerCase()
console.log(resultado3)

//formato 2
console.log(texto3.toUpperCase())

var texto4 = 'Mozilla'
//oz         0 1 2 3 4 5 6 7
console.log(texto4.substring(1, 3))

console.log(texto4.substring(1))

var texto5 = 'Bem vindo a Microsoft'
let novaMensagem = texto5.replace('Microsoft', 'IOS')
console.log(novaMensagem)

//Retirar espaços em branco (TRIM) - apenas tira o espaçamento em branco no começo e no final do texto
let textarea = '                Hello world      aprendendo JAvaScript' 

console.log(textarea.trim())