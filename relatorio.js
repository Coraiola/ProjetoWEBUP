// Função para adicionar jogador à tabela
document.getElementById('formRelatorio').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores do formulário
    const nome = document.getElementById('nomeRelatorio').value;
    const posicao = document.getElementById('dadosRelatorio').value;
    const numero = document.getElementById('numeroRelatorio').value;

    // Verifica se os campos estão preenchidos
    if (nome === '' || posicao === '' || numero === '') {
        document.getElementById('erroRelatorio').textContent = 'Preencha todos os campos!';
        return;
    }

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('tabelaRelatorios').querySelector('tbody');
    const novaLinha = tabela.insertRow();

    // Cria células e adiciona os dados
    const celulaNome = novaLinha.insertCell(0);
    const celulaPosicao = novaLinha.insertCell(1);
    const celulaNumero = novaLinha.insertCell(2);

    celulaNome.textContent = nome;
    celulaPosicao.textContent = posicao;
    celulaNumero.textContent = numero;

    // Limpa os campos do formulário
    document.getElementById('nomeRelatorio').value = '';
    document.getElementById('dadosRelatorio').value = '';
    document.getElementById('numeroRelatorio').value = '';
    document.getElementById('erroRelatorio').textContent = ''; // Limpa qualquer mensagem de erro anterior
});
