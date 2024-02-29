const btnOpenModalMenu = document.querySelector('.header__burger');
const btnCloseModalMenu = document.querySelector('.modal-menu__btn-close');
const modalMenu = document.querySelector('.modal-menu');

function togglerModalMenu() {
   modalMenu.classList.toggle('modal-menu_close');
}

btnOpenModalMenu.addEventListener('click', togglerModalMenu);
btnCloseModalMenu.addEventListener('click', togglerModalMenu);