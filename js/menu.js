var burger = document.querySelector('.mob-button');
var cross = document.querySelector('.cross-button');
var menu = document.querySelector('.inside-part-mob');
var upperMenu = document.querySelector('.upper-menu');
var mobUpper = document.querySelector('.mob-upper');
var menuTwo = document.querySelector('.menu-2');
var linkMainp = document.querySelector('.link-main-page');
var linkMainu = document.querySelector('.links-menu-second');
var stick1 = document.querySelector('.stick-1');
var stick2 = document.querySelector('.stick-2');
var stick3 = document.querySelector('.stick-3');
var stick4 = document.querySelector('.stick-4');
var hypometrIcon = document.querySelector('.hypometr-icon');

burger.addEventListener ('click', function(event) {
  event.preventDefault;
  menu.classList.add('inside-part-mob-open');
  burger.classList.add('mob-button-close');
  cross.classList.remove('cross-button');
  cross.classList.add('cross-button-open');
  upperMenu.classList.add('opened-position');
  menuTwo.classList.add('opened-position');
  mobUpper.classList.add('opened-position');
  linkMainp.classList.add('opened-position');
  stick3.classList.remove('stick-display');
  stick4.classList.remove('stick-display');
  stick1.classList.add('stick-display');
  stick2.classList.add('stick-display');
  hypometrIcon.classList.add('icon-hyp');
    cross.addEventListener ('click', function(event) {
      event.preventDefault;
      menu.classList.remove('inside-part-mob-open');
      burger.classList.remove('mob-button-close');
      cross.classList.remove('cross-button-open');
      cross.classList.add('cross-button');
      upperMenu.classList.remove('opened-position');
      menuTwo.classList.remove('opened-position');
      mobUpper.classList.remove('opened-position');
      linkMainp.classList.remove('opened-position');
      hypometrIcon.classList.remove('icon-hyp');
      stick3.classList.add('stick-display');
      stick4.classList.add('stick-display');
      stick1.classList.remove('stick-display');
      stick2.classList.remove('stick-display');
    });
});
