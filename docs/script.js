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
    som.src = `audios/${textoCartao}.mp3`; 
    som.play();

    let vezesReproduzidas = 0;

    function reproduzirAudio()
    {
        if (vezesReproduzidas < 3) {
            som.play();
            vezesReproduzidas++;
            som.onended = reproduzirAudio; 
        } else {
            // Depois de tocar 3 vezes o áudio, fecha a tela cheia automaticamente
            divTelaCheia.style.opacity = '0';
            setTimeout(() => divTelaCheia.remove(), 500);
        }
    }

    reproduzirAudio(); // Inicia a reprodução

    document.body.appendChild(divTelaCheia);

    // Fecha a tela cheia ao clicar fora da imagem (Num canto qualquer da tela que não corresponda ao tamanho da imagem)
    divTelaCheia.addEventListener('click', function (event)
    {
        if (event.target === divTelaCheia) { // Verifica se clicou fora da imagem
            som.pause(); // Interrompe a reprodução do áudio
            divTelaCheia.style.opacity = '0';
            setTimeout(() => divTelaCheia.remove(), 500);
        }
    });

    // Animação de transição de uma imagem para outra
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

   document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        navegar('esquerda');
    } else if (event.key === 'ArrowRight') {
        navegar('direita');
    } else if (event.key === 'ArrowUp') {
        if (selecionadoIndex - 3 >= 0) {
            selecionadoIndex -= 3;
            atualizarSelecao();
        }
    } else if (event.key === 'ArrowDown') {
        if (selecionadoIndex + 3 < cartoes.length) {
            selecionadoIndex += 3;
            atualizarSelecao();
        }
    } else if (event.key === 'Enter') {
        abrirTelaCheia(cartoes[selecionadoIndex]);
    }
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
