const menuToggle = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');

});

console.log("hello world")