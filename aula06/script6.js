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


function soma(){
    const valorA = parseFloat(document.querySelector('#valorA').value);
    const valorB = parseFloat(document.querySelector('#valorB').value);

    const resposta = document.querySelector('#respostaSoma');

    resposta.innerHTML = '';

    if (!isNaN(valorA) && !isNaN(valorB)) {
        const resultado = valorA + valorB;
        resposta.innerHTML = `${valorA} + ${valorB} = ${resultado}`;
    } else {
        resposta.textContent = 'Insira valores válidos!';
    }
}


function alterarCor(){
    const cor = document.querySelector('#cor').value;
    const body = document.querySelector('body');

    body.style.backgroundColor = `${cor}`
}

function mudarTema(){

    const tema = document.querySelector('#tema').value;
    const body = document.querySelector('body');
    const container = document.querySelectorAll('.container')

    if (tema == 'Claro'){
        body.style.backgroundColor = 'rgb(252, 206,173)';

        for(let item of container){
            item.style.backgroundColor = 'bisque'
            item.style.color = 'rgb(241, 171 , 121)'
        }

    }else if (tema == 'Escuro'){
        body.style.backgroundColor = 'rgb(87, 38, 2)';

        for(let item of container){
            item.style.backgroundColor = 'rgb(154, 67, 4)'
            item.style.color = 'rgb(241, 171 , 121)'
        }
    }else{
        body.style.backgroundColor = 'chocolate';

        for(let item of container){
            item.style.backgroundColor = 'bisque'
            item.style.color = 'black'
        }
    }

}
const botao = document.querySelector('#botao');

botao.addEventListener('click', mudarTema)


function mudarImg(){
    const img = document.querySelector('img')
    const largura = document.querySelector('#larguraImg').value;
    const altura = document.querySelector('#alturaImg').value;
    const radio = document.querySelector('#radioImg').value;

    img.style.width = `${largura}px`;
    img.style.height = `${altura}px`;
    img.style.borderRadius = `${radio}px`;
}

const botaos = document.querySelector('#botaos');
botaos.addEventListener('click', mudarImg)


const botaoUm = document.querySelector('#umClick');
const botaoDois = document.querySelector('#doisClick');

botaoUm.addEventListener('click', ()=> alert('funfou'));
botaoDois.addEventListener('dblclick', ()=> alert('Dois cliques funfou'));

const divArea = document.querySelector('#areaRestrita');

function areaRestrita(){

    const body = document.querySelector('body');

    divArea.firstElementChild.style.display = 'inline-block';
    body.style.backgroundImage = "url('assets/alerta.webp')";

}

divArea.addEventListener('mouseover', areaRestrita);

function areaRestritaSaida(){

    const body = document.querySelector('body');

    divArea.firstElementChild.style.display = 'none';
    body.style.backgroundImage = "";

}

divArea.addEventListener('mouseleave', areaRestritaSaida )

 