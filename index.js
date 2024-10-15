function atualizarMenu() {
    const logado = sessionStorage.getItem('logado') === 'true';
    const menuCadastro = document.getElementById('menuCadastro');
    const menuLogin = document.getElementById('menuLogin');
    const menuRelatorios = document.getElementById('menuRelatorios');
    const statusIcon = document.getElementById('statusIcon');
    const statusTexto = document.getElementById('statusTexto');
    const logoutMenu = document.getElementById('logoutMenu');

    // Atualiza a exibição do menu com base no status de login
    if (logado) {
        menuCadastro.style.display = 'none';
        menuLogin.style.display = 'none';
        menuRelatorios.style.display = 'block';

        statusIcon.classList.replace('fa-user-circle', 'fa-check-circle');
        statusTexto.textContent = 'Logado';
        logoutMenu.style.display = 'block'; // Mostrar menu de logout

    } else {
        menuCadastro.style.display = 'block';
        menuLogin.style.display = 'block';
        menuRelatorios.style.display = 'none';

        statusIcon.classList.replace('fa-check-circle', 'fa-user-circle');
        statusTexto.textContent = 'Não Logado';
        logoutMenu.style.display = 'none'; // Esconder menu de logout se não estiver logado
    }
}
// Event listener para logout
document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault();
    sessionStorage.setItem('logado', 'false'); // Atualiza o estado de login
    window.location.reload(); // Recarrega a página para atualizar o estado
});

// Evento para alternar a exibição do menu de logout
document.getElementById('statusIcon').addEventListener('click', () => {
    const logoutMenu = document.getElementById('logoutMenu');
    logoutMenu.style.display = logoutMenu.style.display === 'none' ? 'block' : 'none';
});

// Atualiza o menu ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarMenu);
