const form = document.getElementById('form-agenda');
const nomeContato = document.getElementById('nome-contato');
const telContato = document.getElementById('tel-contato');
const totalContatos = document.getElementById('total-contatos');


let nomes = []
let url = []
let tel = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTotalContatos();
});


function formatarNumeroTel(numeroTel) {
    if(numeroTel.length === 11) {
        return numeroTel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (numeroTel.length === 10) {
        return numeroTel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        return numeroTel;
    }
}

function adicionarLinha(){
    if(nomes.includes(nomeContato.value) || tel.includes(telContato.value)) {
        alert(`O nome ${nomeContato.value} ou telefone ${telContato.value} já forão inseridos na lista`)
    } else {
        const corpoTabela = document.querySelector('tbody');
        const numeroTelFormatado = formatarNumeroTel(telContato.value)
        corpoTabela.innerHTML += `
            <tr>
                <td>${nomeContato.value}</td>
                <td>${numeroTelFormatado}</td>
            </tr>
        `
    nomes.push(nomeContato.value);
    tel.push(telContato.value);
    url.push(fotoContato.value);
    }

    nomeContato.value = '';
    telContato.value = '';
    fotoContato.value = '';
}
