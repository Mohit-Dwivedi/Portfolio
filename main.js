/*======================================== toggle icon navbar ============================================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navbarLinks.forEach(link => link.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

/* ======================= scroll section active link ========================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('havbar nav a')

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ==================================== Sticky navbar =================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    /* ======================================== remove toggle icon and navbar =======================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')

}

/* =============================================== scroll reveal ====================================== */
ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'buttom' })
SrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScollReveal().reveal('.home-contact p, .about-content', {origin: 'right'})

/* ======================================================== typed js ========================================= */
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  })