document.addEventListener('DOMContentLoaded', function() {
    const animateButton = document.getElementById('animate-button');
    const mainHeading = document.querySelector('.main-heading');
    const subHeading = document.querySelector('.sub-heading');
    const websiteImage = document.querySelector('.website-image');
    
    function animateSubHeading() {
        subHeading.style.transform = 'scale(1.2)';
        subHeading.style.color = '#E44D4D';
        setTimeout(() => {
            subHeading.style.transform = 'scale(1)';
            subHeading.style.color = '#0077B6';
        }, 1000);
    }

    function animateWebsiteImage() {
        websiteImage.style.transform = 'rotate(10deg)';
        setTimeout(() => {
            websiteImage.style.transform = 'rotate(0deg)';
        }, 1000);
    }
    
    animateButton.addEventListener('click', () => {
        animateMainHeading();
        animateSubHeading();
        animateWebsiteImage();
    });
});
