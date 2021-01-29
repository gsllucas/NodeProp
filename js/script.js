const btnMenu = document.querySelector('.btn-menu')
const menuMobile = document.querySelector('.menuMobile')
const btnClose = document.querySelector('.btn-close')
const rodape = document.querySelector('.footer')

btnMenu.addEventListener('click', () => {
    menuMobile.style.display = "block"
    btnClose.style.display = "block"
})

btnClose.addEventListener('click', () => {
    menuMobile.style.display = "none"
    btnClose.style.display = "none"
})

console.log(rodape.getBoundingClientRect())