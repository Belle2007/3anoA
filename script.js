document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoselecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoselecionado)
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste')

    if (aumentaFonteBotao && diminuiFonteBotao) {
        let tamanhoAtualFonte = 1;

        aumentaFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });

        diminuiFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });
    } else {
        console.error('Botões não encontrados no DOM');
    }
    alternaContraste.addEventListener ('click', function(){
        document.body.classList.toggle('alto-contraste')
    })

});

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });

