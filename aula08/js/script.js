// manipulacao de atributos

var titulo2 = $('#tituloPrincipal'); // substitui o document.querySelector

titulo2.addClass('fundoRosa') 

titulo2.attr('class', 'fundoLaranja') //muda a classe 

titulo2.removeAttr('class') // remove atributo



$(function(){
    function calcTabuada(){

        var valor = Number($('#tabuada').val());

        var resposta = $('#respostaTabuada');

        var coletora = ""

        for(let i = 1; i<=10; i++){
            coletora += `${valor} x ${i} = ${valor*i} <br>`

        }
        
        resposta.html(coletora)
    }
    
    var btnCalcular = $('#btnCalcular')
    
    btnCalcular.click(calcTabuada)
})


$(function(){
    function calcSoma(){

        var valorA = Number($('#valorA').val());
        var valorB = Number($('#valorB').val());

        var resposta = $('#respostaSoma');
        var resultado = ""

    if(!isNaN(valorA) && !isNaN(valorB)){
        resultado = `${valorA} + ${valorB} = ${valorA+valorB} <br>`
    }

    resposta.html(resultado)
}

       var btnCalcularr = $('#btnCalcularr')
       btnCalcularr.click(calcSoma)
})


$(function(){
    function alterarCor(){
    const cor = $('#cor').val();
    const body = $('body');

    body.css('backgroundColor', `${cor}`)
    }

    var btnCor = $('#btnCor');
    btnCor.click(alterarCor)
})


$(function(){
    function mudarTema(){
        const tema = $('#tema').val();
        const body = $('body');
        const container = $('.container');

    if (tema == 'Claro'){
        body.css('backgroundColor', 'rgb(252, 206,173)' );
    
        for(let item of container){
            item.css('backgroundColor', 'bisque');
            item.css('color', 'rgb(241, 171 , 121)');
        }
    }else if (tema == 'Escuro'){
        body.css('backgroundColor', 'rgb(87, 38, 2)');

        for(let item of container){
            item.css('backgroundColor', 'rgb(154, 67, 4)');
            item.css('color', 'rgb(241, 171 , 121)');
        }
    }else{
        body.css('backgroundColor', 'chocolate');

        for(let item of container){
            item.css('backgroundColor', 'bisque');
            item.css('color', 'black');
        }
    }
}
    const btnAlt = $('#btnAlt')
    btnAlt.click(mudarTema)
})