// Abre e fecha o formulario de edição
function editarForm(){
    let relatorio = document.querySelector('.editarFunc');

    relatorio.classList.add('showAdd');
}
function fecharForm(){
    let relatorio = document.querySelector('.editarFunc');

    relatorio.classList.remove('showAdd');
    
}

// Mostra a confirmação pra apagar o funcionario
function apagarUser(){
    confirm('Tem certeza que deseja apagar o usuário: \n afonsorapadura@gmail.com');
}

// Abre formulario para adicionar um funcionario
function adicionarFunc(){
    let addForm = document.querySelector('.addFunc');

    addForm.classList.add('show');
}
function fecharAddFunc(){
    let addForm = document.querySelector('.addFunc');

    addForm.classList.remove('show');
}