document.getElementById('formImc').addEventListener('submit', function(e) {
    e.preventDefault();

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');

    if(peso === '' || altura === '') {
        resultado.innerHTML = 'Preencha todos os campos!';
        return;
    }

    let imc = peso / (altura * altura);
    let mensagem = 'Seu IMC é: ' + imc.toFixed(2) + ' - ';

    if(imc < 18.5) {
        mensagem += 'Abaixo do peso';
    } else if(imc < 25) {
        mensagem += 'Peso normal';
    } else if(imc < 30) {
        mensagem += 'Sobrepeso';
    } else {
        mensagem += 'Obesidade';
    }

    resultado.innerHTML = mensagem;
});