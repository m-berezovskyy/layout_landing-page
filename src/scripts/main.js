'use strict';

const burgerButton = document.querySelector('.header__icon--burger');
const closeButton = document.querySelector('#menu__close');
const menuOverlay = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('.menu__link');
const form = document.querySelector('.footer__form');

burgerButton.addEventListener('click', () => {
  menuOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

function closeMenu() {
  menuOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

closeButton.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
