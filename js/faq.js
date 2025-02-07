
document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.faq-icon');

        answer.classList.toggle('hidden');
        icon.style.transform = answer.classList.contains('hidden')
            ? 'rotate(0deg)'
            : 'rotate(180deg)';
    });
});