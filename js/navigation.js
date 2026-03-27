document.getElementById('start-btn').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        
        // Dispara o evento personalizado para o timer saber que pode começar
        window.dispatchEvent(new Event('siteStarted'));
    }, 1000);
});

// Efeito de Scroll Reveal
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.polaroid, .text-moment, .carousel-container-wide','footer').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});