function atualizarMenu() {
    const logado = sessionStorage.getItem('logado') === 'true';
    const menuCadastro = document.getElementById('menuCadastro');
    const menuLogin = document.getElementById('menuLogin');
    const menuRelatorios = document.getElementById('menuRelatorios');
    const statusIcon = document.getElementById('statusIcon');
    const statusTexto = document.getElementById('statusTexto');
    const logoutMenu = document.getElementById('logoutMenu');

    if (logado) {
        menuCadastro.style.display = 'none';
        menuLogin.style.display = 'none';
        menuRelatorios.style.display = 'block';

        statusIcon.classList.replace('fa-user-circle', 'fa-check-circle');
        statusTexto.textContent = 'Logado';

        // Mostrar menu de logout
        statusIcon.addEventListener('click', () => {
            logoutMenu.style.display = logoutMenu.style.display === 'none' ? 'block' : 'none';
        });
    } else {
        menuCadastro.style.display = 'block';
        menuLogin.style.display = 'block';
        menuRelatorios.style.display = 'none';

        statusIcon.classList.replace('fa-check-circle', 'fa-user-circle');
        statusTexto.textContent = 'Não Logado';
        logoutMenu.style.display = 'none'; // Esconder menu de logout se não estiver logado
    }
}

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault();
    sessionStorage.setItem('logado', 'false');
    window.location.reload(); // Recarrega a página para atualizar o estado
});

document.addEventListener('DOMContentLoaded', atualizarMenu);
