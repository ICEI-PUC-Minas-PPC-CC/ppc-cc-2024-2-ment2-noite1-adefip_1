function abrirTelaCheia(cartao)
{
    const divTelaCheia = document.createElement('div');
    divTelaCheia.classList.add('telaCheia');

    const imagem = cartao.querySelector('img').cloneNode(true);
    const texto = cartao.querySelector('p').cloneNode(true);

    divTelaCheia.appendChild(imagem);
    divTelaCheia.appendChild(texto);

    const som = new Audio();
    const textoCartao = texto.textContent.toLowerCase();
    som.src = `audios/${textoCartao}.mp3`; // Corrigido o caminho para o áudio
    som.play();

    document.body.appendChild(divTelaCheia);

    divTelaCheia.addEventListener('click', function ()
    {
        divTelaCheia.style.opacity = '0';
        setTimeout(() => divTelaCheia.remove(), 500);
    });

    divTelaCheia.style.opacity = '0';
    setTimeout(() => divTelaCheia.style.opacity = '1', 0);
}

document.addEventListener('DOMContentLoaded', function ()
{
    const cartoes = document.querySelectorAll('.cartao');
    let selecionadoIndex = 0;

    function atualizarSelecao()
    {
        cartoes.forEach((cartao, index) =>
            cartao.classList.toggle('selecionado', index === selecionadoIndex)
        );
    }

    atualizarSelecao();

    function navegar(direcao)
    {
        if (direcao === 'esquerda' && selecionadoIndex > 0)
            selecionadoIndex--;
        else if (direcao === 'direita' && selecionadoIndex < cartoes.length - 1)
            selecionadoIndex++;

        atualizarSelecao();
    }

    document.addEventListener('keydown', function (event)
    {
        if (event.key === 'ArrowLeft')
            navegar('esquerda');
        else if (event.key === 'ArrowRight')
            navegar('direita');
        else if (event.key === 'Enter')
            abrirTelaCheia(cartoes[selecionadoIndex]);
    });

    cartoes.forEach((cartao, index) =>
    {
        cartao.addEventListener('click', () =>
        {
            selecionadoIndex = index;
            atualizarSelecao();
            abrirTelaCheia(cartao);
        });
    });
});
