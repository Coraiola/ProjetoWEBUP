document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find(usuario => usuario.nome === nome);

    if (usuarioExistente) {
        document.getElementById('erroCadastro').textContent = 'Usuário já existe.';
    } else {
        usuarios.push({ nome, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        window.location.href = 'login.html'; // Redirecionar para a página de login
    }
});
