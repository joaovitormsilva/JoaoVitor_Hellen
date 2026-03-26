document.getElementById('start-btn').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    // Adiciona uma classe de fade-out
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
    }, 1000); // Espera 1 segundo para sumir
});