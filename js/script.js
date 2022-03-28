const breakpoint = window.matchMedia( '(min-width:500px)' );
  let mySwiper;

  const breakpointChecker = () => {
    if ( breakpoint.matches === true ) {
        if ( mySwiper !== undefined ) {
          mySwiper.destroy( true, true );
        }
        return;
    } else if ( breakpoint.matches === false ) {
        return enableSwiper();
    }
  };
  const enableSwiper = () => {
    mySwiper = new Swiper ('.swiper', {
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
  
      slidesPerView: 1.25,
      spaceBetween: 16,
      breakpoints: {
      320: {
        slidesPerView: 1.35,
        spaceBetween: 16
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 16
      }
    }
})
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();

let btnShowMore = document.querySelector('.button-show-more');
let blockMore = document.querySelector('.more');
let btnShowMoreDown = document.querySelector('.button-show-more--active');


btnShowMore.addEventListener ('click', function (){
    if (blockMore.style.display === 'grid') {
        blockMore.style.display = 'none';
        btnShowMore.innerHTML = 'Показать всё';
        btnShowMore.classList.remove('button-show-more--active');
        btnShowMore.classList.add('button-show-more');
    } else {
        blockMore.style.display = 'grid';
        btnShowMore.innerHTML = 'Скрыть';
        btnShowMore.classList.remove('button-show-more');
        btnShowMore.classList.add('button-show-more--active');
    }
});