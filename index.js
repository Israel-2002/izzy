let toggle = document.querySelector(`.nav__toggle`);
let links = document.querySelector(`.links`);

toggle.addEventListener(`click`, function () {
    links.classList.toggle(`show__links`)
    toggle.classList.toggle(`nav__toggle-rotate`)
})