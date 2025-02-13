function toggleContent(element) {
    element.classList.toggle('active');
    const content = element.querySelector('.content-area');
    content.classList.toggle('active');
}

