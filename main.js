const salvar = document.getElementById('bnt');

const limpar = document.getElementById('reset');

const apagar = document.getElementById('apagar');

const contatos = [];

let linhas = ''; 

salvar.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
});

apagar.addEventListener('click', function(){
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('tell').value = '';
    document.getElementById('email').value = '';
})

limpar.addEventListener('click', function() {
    if (contatos.length >= 1){
        window.location.reload();
    }
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value;
    const inputSobrenome = document.getElementById('sobrenome').value;
    const inputTelefone = document.getElementById('tell').value;
    const inputEmail = document.getElementById('email').value;

    if (contatos.includes(inputTelefone) || contatos.includes(inputEmail)){
        alert(`Esse telefone ${inputTelefone} já foi inserido na agenda`);
        alert(`Esse email ${inputEmail} já foi inserido na agenda`);
    } 
    else {
        contatos.push(inputTelefone, inputEmail)

        let linha = '<tr>';
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputSobrenome}</td>`;
        linha += `<td>${inputTelefone}</td>`;
        linha += `<td>${inputEmail}</td>`;
        linha += `</tr>`;
        linhas += linha;

    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


