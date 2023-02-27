let navMenu = document.querySelector('.header__nav-menu')
let burgerWrapper = document.querySelector('.nav-list__burger-wrapper')
let burgerButton = document.querySelector('.nav-list__burger')

// Показываем меню и скрываем бюргер, если JS не загрузился
navMenu.classList.remove('header__nav-menu--nojs')
burgerButton.classList.remove('nav-list__burger--nojs')

// Открываем/закрываем меню навигации по нажатию на бургер, анимируем бургер
let initNavMenu = () => {

  burgerWrapper.addEventListener('click', function () {

    if (navMenu.classList.contains('header__nav-menu--closed')) {
      navMenu.classList.remove('header__nav-menu--closed')
      burgerButton.classList.remove('nav-list__burger--closed')
      burgerButton.classList.add('nav-list__burger--opened')
      return
    }

    navMenu.classList.add('header__nav-menu--closed')
    burgerButton.classList.add('nav-list__burger--closed')
    burgerButton.classList.remove('nav-list__burger--opened')
  })
}

export { initNavMenu }
