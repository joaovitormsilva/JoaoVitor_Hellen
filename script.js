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