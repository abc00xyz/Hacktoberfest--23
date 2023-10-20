document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const isMessageSent = Math.random() < 0.8; 

        if (isMessageSent) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            contactForm.reset();
        } else {
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
        }
    });
});
