document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
const closebutton = document.getElementById('close')
const mobilemenu = document.getElementById('mobile-demo')

closebutton.onclick = function closemenu() {
    mobilemenu.style.display = 'none';
}