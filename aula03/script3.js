// Programa educacional - APROVADO > 7 - REPROVADO < 5 - RECUPERAÇÃO ENTRE 5-7
// Recuperação entre 5 e 7 pra ser aprovado precisa ser classificado como BOM 

// var nota = Number(prompt('Nota do aluno:'));
// var situacao = prompt('Situação do aluno (BOM, MAU, REGULAR):').toUpperCase();// MAU, BOM, REGULAR

// if (nota > 7 && situacao == 'BOM'){
//     alert('APROVADO')
// }
// else if (nota < 5 || situacao == 'REGULAR'){
//     alert('REPROVADO')
// }
// else {
//     alert('RECUPERAÇÃO')
// }


// Programa DESCONTO - Avaliar se a compra do cliente foi maior que 100 reais ele tem 20%, se foi maior do que 50 reais ele tem 10%, se foi menor, ele tem 5%. Se o cliente tem o nome igual Gustavo, ele tem 20% de desconto direto.

var valorCompra = Number(prompt('Qual o valor da compra?'));
var cliente = prompt('Insira seu primeiro nome:');

if (valorCompra > 100 || cliente == 'Gustavo'){
    alert('Você ganhou 20% de desconto')
}
else if (valorCompra > 50){
    alert('Você tem 10% de desconto')
}
else {
    alert('Você tem 5% de desconto')
}