// Ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', function () {

    // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
    });

    // Handle navigation active link
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust 50px for header height
                behavior: 'smooth'
            });
        });
    });

    // Slide show for the homepage banner
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Show the selected slide
        slides[index].classList.add('active');
    }

    // Navigate slides
    document.getElementById('next-slide').addEventListener('click', function () {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    });

    document.getElementById('prev-slide').addEventListener('click', function () {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    });

    // Initialize the first slide
    showSlide(slideIndex);

    // Handle form submissions (example: search form)
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const query = document.getElementById('search-input').value.trim();
            if (query) {
                alert(`Searching for: ${query}`); // Placeholder for actual search functionality
            }
        });
    }

});
