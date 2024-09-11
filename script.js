document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form values
    const message = document.getElementById('message').value;

    // Display a confirmation message
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.style.color = 'pink';

    // Optionally, you could send the form data to a server here
});
