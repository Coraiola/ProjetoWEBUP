document.getElementById('formRelatorio').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeRelatorio').value;
    const dados = document.getElementById('dadosRelatorio').value;
    
    if (nome && dados) {
        adicionarRelatorio(nome, dados);
        document.getElementById('erroRelatorio').textContent = '';
    } else {
        document.getElementById('erroRelatorio').textContent = 'Preencha todos os campos.';
    }
});

function adicionarRelatorio(nome, dados) {
    const tabela = document.getElementById('tabelaRelatorios').querySelector('tbody');
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaDados = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaDados.textContent = dados;

    // Limpar o formulário após a inserção
    document.getElementById('formRelatorio').reset();
}
