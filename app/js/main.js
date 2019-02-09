let slide = () => {
  if ($('body')[0].clientWidth < 960) {
    return 1;
  } else {
    return 3;
  }
};
$('.slick').slick({
  slidesToShow: `${slide()}`,
  infinite: true,
});

$('.preview').on('mousewheel touchstart', function() {
  $('.anim').each((i, elem) => {
    elem.style.right = '0';
  });
});
$('.first').on('click', function() {
  $('.touch__input--name').addClass('active');
});
$('.marg').on('click', function() {
  $('.touch__input--email').addClass('active');
});
let counter = 0;
$('.header__menu--button').on('click', function() {
  counter++;
  $(this).toggleClass('button--active');
  $('.header__menu').toggle('slow');
  if (counter % 2 === 1) {
    $('.header').addClass('header__active');
  }
  if (counter % 2 === 0) {
    $('.header').removeClass('header__active');
  }
});
$('.header__menu').on('click', function() {
  if ($('body')[0].clientWidth < 960) {
    counter++;
    $('.header__menu').toggle();
    $('.header').removeClass('header__active');
    $('.header__menu--button').removeClass('button--active');
  }
});
