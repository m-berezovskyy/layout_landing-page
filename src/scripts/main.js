'use strict';

const burgerButton = document.querySelector('.header__icon--burger');
const closeButton = document.querySelector('#menu__close');
const menuOverlay = document.querySelector('#menu');

burgerButton.addEventListener('click', () => {
  menuOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menuOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
});
