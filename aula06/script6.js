const tituloPrincipal = document.querySelector('#tituloPrincipal')
const divDOM = document.querySelectorAll('div.content')

tituloPrincipal.textContent = 'Seja bem-vindo(a)';

function tabuada(){
    const valor = document.querySelector('#tabuada').value;

    const divResposta = document.querySelector('#respostaTabuada');

    divResposta.innerHTML = '';

    if(valor != ''){

    for (let i=1; i<=10; i++){
    divResposta.innerHTML += `${valor} x ${i} = ${valor*i} <br>`
    }
    }else{
        divResposta.textContent = 'Insira um valor!'
    }
}   

function alterarCor(){
    const cor = document.querySelector('#cor').value
    const body = document.querySelector('body');

    body.style.backgroundColor = `${cor}`
}