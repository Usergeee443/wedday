function toggleContent(element) {
    element.classList.toggle('active');
    const content = element.querySelector('.content-area');
    content.classList.toggle('active');
}

// Desktop hover effect
if (window.innerWidth >= 1024) {
    document.querySelectorAll('.ios-list-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#F8F8F8';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'white';
        });
    });
}