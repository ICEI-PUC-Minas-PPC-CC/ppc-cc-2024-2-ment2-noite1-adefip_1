
// Funcao para exibir o cartao em tela cheia e reproduzir o audio

function abrirTelaCheia(cartao) {
    const divTelaCheia = document.createElement('div');
    divTelaCheia.classList.add('telaCheia');

    const imagem = cartao.querySelector('img').cloneNode(true);
    const texto = cartao.querySelector('p').cloneNode(true);

    divTelaCheia.appendChild(imagem);
    divTelaCheia.appendChild(texto);

    const som = new Audio();
    const textoCartao = texto.textContent.toLowerCase();
    som.src = `${textoCartao}.mp3`;
    som.play();

    document.body.appendChild(divTelaCheia);

    // Fecha a tela cheia ao clicar
    divTelaCheia.addEventListener('click', function() {
        divTelaCheia.style.opacity = '0';
        setTimeout(() => divTelaCheia.remove(), 500);
    });

    divTelaCheia.style.opacity = '0';
    setTimeout(() => divTelaCheia.style.opacity = '1', 0);
}

// Funcao principal de navegacao e selecao
document.addEventListener('DOMContentLoaded', function() {
    const cartoes = document.querySelectorAll('.cartao');
    let selecionadoIndex = 0;

    // Funcao para atualizar o destaque do cartao selecionado
    function atualizarSelecao() {
        cartoes.forEach((cartao, index) => {
            cartao.classList.toggle('selecionado', index === selecionadoIndex);
        });
    }

    // Inicializa com o primeiro cartao da esquerda selecionado
    atualizarSelecao();

    // Funcao para navegar entre os cartoes
    function navegar(direcao) {
        if (direcao === 'esquerda' && selecionadoIndex > 0) {
            selecionadoIndex--;
        } else if (direcao === 'direita' && selecionadoIndex < cartoes.length - 1) {
            selecionadoIndex++;
        }
        atualizarSelecao();
    }

    // Utilizar o teclado para navegar e abrir o cartao
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            navegar('esquerda');
        } else if (event.key === 'ArrowRight') {
            navegar('direita');
        } else if (event.key === 'Enter') {
            abrirTelaCheia(cartoes[selecionadoIndex]); // Abre o cartao selecionado em tela cheia
        }
    });

    // Evento de clique para selecionar e abrir o cartao
    cartoes.forEach((cartao, index) => {
        cartao.addEventListener('click', () => {
            selecionadoIndex = index;
            atualizarSelecao();
            abrirTelaCheia(cartao); // Abre o cartao clicado em tela cheia
        });
    });
});
