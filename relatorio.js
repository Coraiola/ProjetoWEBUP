// Função para salvar o relatório no Local Storage
function salvarRelatorio(titulo, descricao) {
    // Recupera a lista de relatórios do Local Storage ou inicializa um array vazio
    const relatorios = JSON.parse(localStorage.getItem('relatorios')) || [];
    
    // Adiciona o novo relatório à lista
    relatorios.push({ titulo, descricao });
    
    // Atualiza o Local Storage com a lista atualizada
    localStorage.setItem('relatorios', JSON.stringify(relatorios));
}

// Função para carregar e exibir relatórios salvos
function carregarRelatorios() {
    // Recupera a lista de relatórios do Local Storage
    const relatorios = JSON.parse(localStorage.getItem('relatorios')) || [];
    
    // Seleciona o elemento onde os relatórios serão exibidos
    const listaRelatorios = document.getElementById('listaRelatorios');
    
    // Limpa a lista de relatórios antes de adicionar os novos
    listaRelatorios.innerHTML = '';

    // Adiciona cada relatório à lista no HTML
    relatorios.forEach((relatorio, index) => {
        const li = document.createElement('li');
        li.textContent = `${relatorio.titulo}: ${relatorio.descricao}`;

        // Botão para remover um relatório específico
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.addEventListener('click', () => removerRelatorio(index));

        li.appendChild(btnRemover);
        listaRelatorios.appendChild(li);
    });
}

// Função para remover um relatório do Local Storage
function removerRelatorio(index) {
    // Recupera a lista de relatórios do Local Storage
    const relatorios = JSON.parse(localStorage.getItem('relatorios')) || [];
    
    // Remove o relatório pelo índice
    relatorios.splice(index, 1);
    
    // Atualiza o Local Storage com a lista atualizada
    localStorage.setItem('relatorios', JSON.stringify(relatorios));

    // Recarrega a lista de relatórios
    carregarRelatorios();
}

// Event listener para o formulário de relatório
document.getElementById('formRelatorio').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Captura os valores do título e descrição
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    // Salva o novo relatório no Local Storage
    salvarRelatorio(titulo, descricao);
    
    // Atualiza a lista de relatórios exibida
    carregarRelatorios();

    // Limpa os campos do formulário
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
});

// Carregar relatórios ao iniciar a página
document.addEventListener('DOMContentLoaded', carregarRelatorios);

// Função para salvar o relatório no Local Storage
function salvarRelatorio(nome, posicao, numero) {
    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    jogadores.push({ nome, posicao, numero });
    localStorage.setItem('jogadores', JSON.stringify(jogadores));
}

// Função para carregar e exibir os relatórios salvos (jogadores)
function carregarRelatorios() {
    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    const tabelaCorpo = document.querySelector('#tabelaRelatorios tbody');
    tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    jogadores.forEach(jogador => {
        const linha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        colunaNome.textContent = jogador.nome;
        linha.appendChild(colunaNome);

        const colunaPosicao = document.createElement('td');
        colunaPosicao.textContent = jogador.posicao;
        linha.appendChild(colunaPosicao);

        const colunaNumero = document.createElement('td');
        colunaNumero.textContent = jogador.numero;
        linha.appendChild(colunaNumero);

        tabelaCorpo.appendChild(linha);
    });
}

// Event listener para o formulário de relatório
document.getElementById('formRelatorio').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const nome = document.getElementById('nomeRelatorio').value;
    const posicao = document.getElementById('dadosRelatorio').value;
    const numero = document.getElementById('numeroRelatorio').value;

    if (nome && posicao && numero) {
        salvarRelatorio(nome, posicao, numero); // Salva o jogador no Local Storage
        carregarRelatorios(); // Atualiza a tabela com o novo jogador

        // Limpa os campos do formulário
        document.getElementById('nomeRelatorio').value = '';
        document.getElementById('dadosRelatorio').value = '';
        document.getElementById('numeroRelatorio').value = '';
    } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        document.getElementById('erroRelatorio').textContent = 'Por favor, preencha todos os campos.';
    }
});

// Carregar relatórios ao iniciar a página
document.addEventListener('DOMContentLoaded', carregarRelatorios);
