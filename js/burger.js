const burger = document.querySelector(`.burger-btn`),
  navMenu = document.querySelector(`.nav__menu`),
  link = document.querySelectorAll(`.nav__link`);


const scrollLock = () => {
    document.body.classList.add(`scroll-lock`);
  },
  scrollUnclock = () => {
    document.body.classList.remove(`scroll-lock`);
  },
  menuOpen = () => {
    navMenu.classList.add(`active`);
    scrollLock();
  },
  menuClose = () => {
    navMenu.classList.remove(`active`);
    scrollUnclock()
  };

burger.addEventListener(`click`, () => {
  burger.classList.toggle(`active`);
  if (burger.classList.contains(`active`)) {
    menuOpen();
  } else {
    menuClose();
  }
});
link.forEach(i =>{
  i.addEventListener(`click`, ()=>{
    burger.classList.remove(`active`);
    menuClose()
  })
})