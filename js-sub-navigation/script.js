// declare variables
var menuLink = document.getElementById('menuLink');
var mainMenu = document.getElementById('mainMenu');
var subMenu = document.getElementById('subMenu');
var backBtn = document.getElementById('backBtn');

// attach event listeners
menuLink.addEventListener('click', clickedMenuLink);
backBtn.addEventListener('click', clickedBackBtn);

// functions
function clickedMenuLink(event) {
  // console.log(event);
  subMenu.classList.add('submenu-show');
  mainMenu.classList.add('menu-hide');
  
  // gsap
  // hide the main menu links
  TweenMax.to('#mainMenu > li > a', .3, { autoAlpha: 0, x: -100 });
  // show the sub menu links
  TweenMax.staggerTo('#subMenu > li > a', .3, { autoAlpha: 1, x: 0, delay: .3 }, .1);
  // show the back arrow using autoAlpha that
  // animates opacity and visibility
  TweenMax.to('#backBtn', .3, { autoAlpha: 1 });
  // and hide the logo
  TweenMax.to('#logo', .3, { autoAlpha: 0, onComplete: showHideSubMenu });
}

function clickedBackBtn(event) {
  TweenMax.staggerTo('#mainMenu > li > a', .3, { autoAlpha: 1, x: 0, delay: .3 }, .1);
  TweenMax.staggerTo('#subMenu > li > a', .3, { autoAlpha: 0, x: 100 }, .1);

  TweenMax.to('#backBtn', .3, { autoAlpha: 0 });
  TweenMax.to('#logo', .3, { autoAlpha: 1, onComplete: showHideSubMenu });
}

function showHideSubMenu() {
  subMenu.classList.toggle('submenu-hide');
}