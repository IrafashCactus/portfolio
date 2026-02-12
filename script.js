const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Changing the text instead of an icon
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'SWITCH TO LIGHT';
    } else {
        themeToggle.innerText = 'SWITCH TO DARK';
    }
});

// Smooth reveal animation
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, options);

document.querySelectorAll('.skill-category, .focus-card').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease-out";
    observer.observe(item);
});