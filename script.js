const toggleButton = document.getElementById('theme-toggle');

// Carrega o tema salvo no localStorage
document.body.classList.toggle('dark-theme', localStorage.getItem('theme') === 'dark');

// Alterna entre os temas ao clicar no botão
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Salva o tema atual no localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
