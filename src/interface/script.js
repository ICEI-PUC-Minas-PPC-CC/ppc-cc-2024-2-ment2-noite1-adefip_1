function abrirTelaCheia(cartao)
{
    const divTelaCheia = document.createElement('div');
    divTelaCheia.classList.add('telaCheia');

    const imagem = cartao.querySelector('img').cloneNode(true);
    const texto = cartao.querySelector('p').cloneNode(true);

    divTelaCheia.appendChild(imagem);
    divTelaCheia.appendChild(texto);

    document.body.appendChild(divTelaCheia);

    divTelaCheia.addEventListener('click', function() 
    {
        divTelaCheia.style.opacity = '0';
        setTimeout(() => divTelaCheia.remove(), 500);
    });

    divTelaCheia.style.opacity = '0';
    setTimeout(() => divTelaCheia.style.opacity = '1', 0);
}
