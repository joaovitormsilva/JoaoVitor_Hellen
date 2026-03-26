// Configuração do início do namoro: Ano, Mês (0-11), Dia
const dataInicio = new Date(2025, 11, 29, 0, 0, 0); // Ex: 29 de Dezembro de 2025

document.getElementById('start-btn').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        
        // Inicia o contador assim que entra no site
        atualizarContador();
        setInterval(atualizarContador, 1000);
    }, 1000);
});

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById('clock').innerText = 
        `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}


// Função para aparecer elementos conforme o scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Aplica o efeito nas polaroids e textos
document.querySelectorAll('.polaroid, .text-moment').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});