const menu_btn = document.querySelector('.meanuicon');
const moblie_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  moblie_menu.classList.toggle('is-active');
});