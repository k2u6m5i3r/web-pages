'use strict'

document.addEventListener('click', burgerClick);

function burgerClick(e) {
  const targetItem = e.target;
  if(targetItem.closest('.icon-menu')){
    document.documentElement.classList.toggle('menu-open');
  }
}