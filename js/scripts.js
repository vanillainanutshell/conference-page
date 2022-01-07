document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
const closebutton = document.getElementById('close')
const mobilemenu = document.getElementById('mobile-demo')
const burgir = document.getElementById('burgir')

closebutton.onclick = function closemenu() {
    mobilemenu.style.display = 'none';
    let filter = document.querySelector('.sidenav-overlay')
    filter.style.display = 'none';
}
burgir.onclick = function openmenu() {
    mobilemenu.style.display = 'block'
}