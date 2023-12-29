const alterarStatus = (number) =>{
    const game = document.querySelector(`#game-${number}`)
    const image = game.children[0]
    const botao = game.children[2]
    console.log(image);
    if (image.classList.contains('dashboard__item__img--rented')) {
        image.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent= 'Alugar'
    } else {
        image.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.textContent= 'Devolver'
    }
}   