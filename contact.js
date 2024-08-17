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