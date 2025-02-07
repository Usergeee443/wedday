document.addEventListener('DOMContentLoaded', function () {
    let hasAnimated = false;

    function animateValue(element, start, end, duration) {
        if (start === end) return;
        const range = end - start;
        let current = start;
        const step = Math.ceil(range / (duration / 20)); // Har 20ms da o'zgarish
        const timer = setInterval(function () {
            current += step;
            if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = current + (element.hasAttribute('data-suffix') ? element.getAttribute('data-suffix') : '');
        }, 20); // Har 20ms da ishlaydi
    }

    function startAnimation() {
        if (!hasAnimated) {
            document.querySelectorAll('.counter').forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                animateValue(counter, 0, target, 1000); // 1000ms = 1 sekund
            });
            hasAnimated = true;
        }
    }

    // Animatsiyani boshlash
    startAnimation();
});