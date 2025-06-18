//MENSAGENS DE POP UPS NO SITE


//window.alert("Hello World")


//window.prompt("Digite um numero de 1 a 10")     


//    nome da função - tempo para chamar a função
// window.setTimeout(mensagem, 5000)
// 2s > 2000 mil mile segundos

// FUNCTION depois nome da variavel> Ações que o codigo pode executar quando for solicitado pelo usuarioo no navegador
function Mensagem(){
    alert("Aprendendo DOM com JS")
    alert(Date(String))
    // console.log("Aprendendo DOM com JS")
}

let tagH1 = document.createElement("h1")
//innerHTML - serve para adicionar uma informação dentro das tags do HTML
tagH1.innerHTML = 'Olá mundo, criei você'
//A quem ela bi pertencer
document.body.appendChild(tagH1)