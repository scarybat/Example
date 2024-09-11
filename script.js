document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form values
    const message = document.getElementById('message').value;

    // Display a confirmation message
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = `WOOO, ${name}! NICE NICE.`;
    formMessage.style.color = 'red';

    // Optionally, you could send the form data to a server here
});
