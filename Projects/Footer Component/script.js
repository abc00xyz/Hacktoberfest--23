document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    const slider = document.querySelector('.content-slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Slide content
    function slideContent() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(slideContent, 3000); // Auto-slide every 3 seconds
});
