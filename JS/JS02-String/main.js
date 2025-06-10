//"A" //Caracter
//"ola" // Texto - String
var texto1 ="Olá IOS"
//          0 1 2 3 4 5 6 --- Caracteres do "Olá IOS"
var resultado1 = texto1.charAt(6) //posição dos carácteres na saída do terminal
console.log(resultado1)
var resultado2 = texto1[1] //COLCHETES { } SUBSTITUI A charAt
console.log(resultado2)


var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(lorem.length) //contador de caractéres .lenght