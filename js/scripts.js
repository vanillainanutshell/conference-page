document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);
});
const closebutton = document.getElementById('close');
const mobilemenu = document.getElementById('mobile-demo');
const burgir = document.getElementById('burgir');

closebutton.onclick = function closemenu() {
  mobilemenu.style.display = 'none';
  const filter = document.querySelector('.sidenav-overlay');
  filter.style.display = 'none';
};
burgir.onclick = function openmenu() {
  mobilemenu.style.display = 'block';
};