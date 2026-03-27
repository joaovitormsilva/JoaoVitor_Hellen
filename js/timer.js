// js/timer.js

const dataInicio = new Date(2025, 11, 29, 0, 0, 0); // Mantendo 29 de Dezembro

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    // Atualiza cada elemento individualmente
    document.getElementById('days').innerText = dias.toString().padStart(2, '0');
    document.getElementById('hours').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = segundos.toString().padStart(2, '0');
}

window.addEventListener('siteStarted', () => {
    atualizarContador();
    setInterval(atualizarContador, 1000);
});