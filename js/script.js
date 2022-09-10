// слайдер

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pag',
    clickable: true,
  },
});

// табы

const tabsBtn = document?.querySelectorAll('.stages__btn');
const tabsItem = document?.querySelectorAll('.stages__wrapper');

tabsBtn.forEach(function(el){
  el.addEventListener('click', function(e){
    let path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('stages__btn--active')
    });
    e.currentTarget.classList.add('stages__btn--active');

    tabsItem.forEach(function(el){
      el.classList.remove('stages__wrapper--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__wrapper--active');
  });
});

// аккордеон

new Accordion('.accordion__list', {
  elementClass: 'accordion__item',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  heightStyle: 'content',
  showMultiple: false,
  collapse: true
})


// бургер-меню

const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.header__nav');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight);
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('header__nav--visible');
    });
});


// search

const searchBtn = document?.querySelector('.header__search');
const search = document?.querySelector('.search');
const closeBtn = document?.querySelector('.search__close');

searchBtn.addEventListener('click', () => {
  search.classList.toggle('search--visible');
});

closeBtn.addEventListener('click', () => {
  search.classList.remove('search--visible');
});

