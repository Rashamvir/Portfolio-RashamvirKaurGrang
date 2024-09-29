// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetID = this.getAttribute('href').substring(1);  // Get the target section ID
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,  // Adjust for the height of the sticky navbar
                behavior: 'smooth'
            });
        }
    });
});

// Toggle Navigation Menu for Mobile Screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
