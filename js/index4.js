const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobile-ul');

bars.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});


const dropdown = document.getElementsByClassName('dropdown-btn');
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling; //next li directly calls upon this argu.
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }