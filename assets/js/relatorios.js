let abrirForm = document.querySelector('.abrirRelatorio');
let fecharForm = document.querySelector('.closeBtn');

abrirForm.onclick = () => {
    let relatorio = document.querySelector('.relatorio');

    relatorio.classList.add('show')
}

fecharForm.onclick = () => {
    let relatorio = document.querySelector('.relatorio');

    relatorio.classList.remove('show')
}