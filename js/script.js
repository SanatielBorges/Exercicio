
function enviar(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    if (nome === '' || email === '' || telefone === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    var table = document.querySelector('table tbody');

    var linhas = table.getElementsByTagName('tr');
    for (var i = 0; i < linhas.length; i++) {
        var colunaEmail = linhas[i].getElementsByTagName('td')[1];
        if (colunaEmail.textContent === email) {
            alert('Este e-mail já está cadastrado.');
            return;
        }
    }

    var novaLinha = document.createElement('tr');

    var colunaNome = document.createElement('td');
    colunaNome.textContent = nome;
    novaLinha.appendChild(colunaNome);

    var colunaEmail = document.createElement('td');
    colunaEmail.textContent = email;
    novaLinha.appendChild(colunaEmail);

    var colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;
    novaLinha.appendChild(colunaTelefone);

    table.insertBefore(novaLinha, table.firstChild);

    document.getElementById('nome').value = '';

    document.getElementById('email').value = '';

    document.getElementById('telefone').value = '';
}
