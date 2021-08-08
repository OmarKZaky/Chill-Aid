const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobile-ul');

bars.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});