let atividadeEntregue = false
let diaFinalEntrega = 19
let mensagemParabens = 'Parabéns, valeu fera'

if(atividadeEntregue == true){ //true
console.log("mensagemPabéns")

    if(diaFinalEntrega <= 13){
    console.log("Entregou a atividade na data e sua nota é 10!")
    }else{console.log("Entregou fora da data e sera retirado 2 pontos")
    }

}
else if(atividadeEntregue == false){ //false
console.log("Oops, você ainda não entregou sua atividade")
}

else{ //else serve para resposta alternativa,  ou, caso seja um texto que o usuario insira não corresponde as alternativas do código
    console.log("Você inseriu uma informação inválida")
}



let nota = 6.9
// se a nota for igual ou maior de 7, enão o aluno passou dsa matéria
//se não a nota for menor ou igual a 6,9 o aluno ficará de recuperação
if(nota >= 7){
    console.log("Passou na materia")
}else{
    console.log("Vai de recuperação")
}

nota >= 7 ? console.log("Passou na materia") :
console.log("Vai ficar de recuperação")

