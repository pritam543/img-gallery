let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the first slide
slides[currentSlide].style.display = 'block';

// Navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
});

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
});

// Lightbox functionality
document.querySelectorAll('.slide img').forEach((img) => {
    img.addEventListener('click', () => {
        document.getElementById('lightbox').style.display = 'block';
        document.getElementById('lightbox-img').src = img.src;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
