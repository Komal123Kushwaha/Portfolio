document.addEventListener("DOMContentLoaded", function () {
    //  Display Current Date & Time
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString(); // Example: 3/16/2025, 10:30:45 AM
        const dateTimeElement = document.getElementById("current-date-time");

        if (dateTimeElement) {
            dateTimeElement.textContent = dateTimeString;
        }
    }

    updateDateTime(); 
    setInterval(updateDateTime, 1000); 

    //  Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            let errorMessage = "";

            // Name Validation
            if (name === "") {
                errorMessage += "Please enter your name.\n";
            }

            // Email Validation 
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMessage += "Please enter a valid email address.\n";
            }

            // Message Validation
            if (message === "") {
                errorMessage += "Please enter your message.\n";
            }

            // Show Errors or Submit Form
            if (errorMessage) {
                alert(errorMessage); // Show errors
            } else {
                alert("Form submitted successfully!");
                contactForm.reset(); // Reset form fields
            }
        });
    }
});
