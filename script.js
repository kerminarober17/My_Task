const enrollButtons = document.querySelectorAll('.btn-enroll');

enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseTitle = this.parentElement.querySelector('h3').innerText;
        alert(`Thank you for your interest! You have been pre-enrolled in: ${courseTitle}`);
    });
});
