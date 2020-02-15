var humburger = document.querySelector('.js-humburger');
var menu = document.querySelector('.js-menu');

humburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    humburger.classList.toggle('active');
})
