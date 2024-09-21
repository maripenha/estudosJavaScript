const titulo = document.querySelector('#titulo');
const resposta = document.querySelector('#respostaAtributo')

function pegarClasse(){
    resposta.textContent = titulo.getAttribute('class')
}

const buttonClass = document.querySelector('#pegarClasse');
buttonClass.addEventListener('click', pegarClasse);

function verificarClasse(){
    resposta.textContent = titulo.hasAttribute('class')

}

const buttonVerificar = document.querySelector('#verificarClasse');
buttonVerificar.addEventListener('click', verificarClasse);

function trocar(){
    titulo.setAttribute('class', 'tituloFundoRosa')
}

const buttonTrocar = document.querySelector('#trocarClasse');
buttonTrocar.addEventListener('click', trocar)

function variar(){
    titulo.classList.remove(titulo.getAttribute('class', '' ))
}

const buttonVariar = document.querySelector('#variarClasse');
buttonVariar.addEventListener('click', variar)




// const buttonLampada = document.querySelector('#variar');
// function buttonChange(){
//     buttonLampada.innerHTML = "Apagar"
// }


// const lampada = document.querySelector('#lampada');
// const body = document.querySelector('body')z

// function ascenderLampada(){
    
//     lampada.setAttribute('src', 'assetsaula07/acesa.png')
    
// }


// buttonLampada.addEventListener('click', buttonChange, ascenderLampada)


// function ascenderLampada(){
//     const lampada = document.querySelector('#lampada');
//     const body = document.querySelector('body')

//     if (){
//         body.classList.toggle('acesa')
//     }
    
// }



// jokenpo

const tesoura = document.querySelector('#tesoura');
const papel = document.querySelector('#papel');
const pedra = document.querySelector('#pedra');


