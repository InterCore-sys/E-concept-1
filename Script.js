document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Function to add or remove the 'scrolled' class
    const toggleHeaderBackground = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleHeaderBackground);

    // Initial check in case the user reloads the page while scrolled down
    toggleHeaderBackground();
});
