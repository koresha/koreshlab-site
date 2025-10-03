// Header scroll effect with smooth transparency
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar');
    let lastScroll = 0;
    
    // Initial check for scroll position
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    }

    // Throttle function to improve performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Scroll event listener with throttling
    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.scrollY;
        
        if (currentScroll <= 50) {
            // At the top
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }

        lastScroll = currentScroll;
    }, 100));
});