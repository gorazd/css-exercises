var btnAbout = document.getElementById('btnAbout');
var btnBack = document.getElementById('btnBack');
var sectionAbout = document.getElementById('sectionAbout');

btnAbout.addEventListener('click', toggleAboutMenu);
btnBack.addEventListener('click', toggleAboutMenu);

function toggleAboutMenu() {
  sectionAbout.classList.toggle('visible');
}