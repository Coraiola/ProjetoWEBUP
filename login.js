document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);

    if (usuarioValido) {
        sessionStorage.setItem('logado', 'true');
        window.location.href = 'index.html'; // Redirecionar para a página principal
    } else {
        document.getElementById('erroLogin').textContent = 'Nome ou senha incorretos.';
    }
});
