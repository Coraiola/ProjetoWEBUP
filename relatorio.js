// Função para salvar o relatório no Local Storage
function salvarRelatorio(titulo, descricao) {
    const relatorios = JSON.parse(localStorage.getItem('relatorios')) || [];
    relatorios.push({ titulo, descricao });
    localStorage.setItem('relatorios', JSON.stringify(relatorios));
}

// Função para carregar e exibir relatórios salvos
function carregarRelatorios() {
    const relatorios = JSON.parse(localStorage.getItem('relatorios')) || [];
    const listaRelatorios = document.getElementById('listaRelatorios');
    listaRelatorios.innerHTML = ''; // Limpa a lista antes de adicionar novos

    relatorios.forEach(relatorio => {
        const li = document.createElement('li');
        li.textContent = `${relatorio.titulo}: ${relatorio.descricao}`;
        listaRelatorios.appendChild(li);
    });
}

// Event listener para o formulário de relatório
document.getElementById('formRelatorio').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    salvarRelatorio(titulo, descricao); // Salva o relatório
    carregarRelatorios(); // Atualiza a lista de relatórios

    // Limpa os campos do formulário
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
});

// Carregar relatórios ao iniciar a página
document.addEventListener('DOMContentLoaded', carregarRelatorios);
