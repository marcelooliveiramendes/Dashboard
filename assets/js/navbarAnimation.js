let btn = document.querySelector('.nav_btn');
let navbar = document.querySelector('.mobile_nav');

btn.onclick = () => {
    navbar.classList.toggle("active");
}