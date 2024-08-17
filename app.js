var typed = new Typed(".word", {
    strings: ["Full Stack Developer", "Mobile App Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    if (menuLi[len]) {  // Ensure menuLi[len] is defined
        menuLi[len].classList.add("active");
    }
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50); // Fixed to target header
});

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el)); // Fixed usage of observer
const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el)); // Fixed usage of observer
const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el)); // Fixed usage of observer




