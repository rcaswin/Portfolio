var typed = new Typed(".word",{
    strings:["Full Stack Developer", "Mobile App Developer", "UI/UX Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY+97<section[len].offsetTop){}
    menuLi.forEach(sec=>sec.classList.remove("active"));
    menuLi[len].classList.add("active")
}
activeMenu();
window.addEventListener("scroll",activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    window.classList.toggle("sticky",window.scrollY>50)
})

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer(el));
const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer(el));
const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer(el));

// js/contact.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect the form data
        var templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Send the email
        emailjs.send('service_gx010d8', 'template_e9li1lo', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully!");
            }, function(error) {
                console.error('FAILED...', error);
                alert("Failed to send the message.");
            });
    });
});
