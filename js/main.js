// ios-list-item larni FAQs ga o'xshab o'chilishi uchun
function toggleContent(element) {
    element.classList.toggle('active');
    const content = element.querySelector('.content-area');
    content.classList.toggle('active');
}



// Asosiy sahifani headeri Apple stylega oxshash animatsiya uchun
const mainLogo = document.querySelector('.main-logo');
    const header = document.querySelector('.header-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const threshold = 20;
        
        if (currentScroll > threshold) {
            mainLogo.classList.add('scrolled');
            header.classList.add('visible');
        } else {
            mainLogo.classList.remove('scrolled');
            header.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    });


const headerCall = document.querySelector('.back-header');
    
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 10) {
        headerCall.classList.add('scrolled');
    } else {
        headerCall.classList.remove('scrolled');
    }
});


// Boshqa pageaga o'tayotganda loading
document.querySelectorAll('.loading-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the chevron and loader within this specific link
        const chevron = this.querySelector('.chevron-icon');
        const loader = this.querySelector('.apple-loader');
        
        // Hide chevron and show loader for this link only
        chevron.style.display = 'none';
        loader.style.display = 'block';
        
        // Navigate after animation
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 1000);
    });
});