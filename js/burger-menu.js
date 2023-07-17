const iconMenu = document.querySelector('.header__burger-icon');
if (iconMenu) {
    const headerMenu = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active-burger-menu');
        headerMenu.classList.toggle('_active-burger-menu');
    })
}