var botaos = document.querySelectorAll('.listaJogos-slider-item');

botaos.forEach(function(botao){
    botao.addEventListener('click', function() {

        //remover classe ativa
        botaos.forEach(function(botaoremoveclasse){
            botaoremoveclasse.classList.remove('listaJogos-slider-item--ativo');
        })

        botao.classList.add('listaJogos-slider-item--ativo');
    })
});