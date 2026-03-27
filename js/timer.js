const dataInicio = new Date(2025, 11, 29, 0, 0, 0); 

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
    }
}

// Escuta o evento de início vindo do navigation.js
window.addEventListener('siteStarted', () => {
    atualizarContador();
    setInterval(atualizarContador, 1000);
});