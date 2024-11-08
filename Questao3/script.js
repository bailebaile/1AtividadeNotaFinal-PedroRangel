document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let resultado = document.getElementById('mensagemResultado');

    if(nome === '' || email === '' || mensagem === '') {
        resultado.style.color = 'red';
        resultado.innerHTML = 'Por favor, preencha todos os campos!';
        return;
    }

    if(!email.includes('@')) {
        resultado.style.color = 'red';
        resultado.innerHTML = 'Digite um email válido!';
        return;
    }

    resultado.style.color = 'green';
    resultado.innerHTML = 'Mensagem enviada com sucesso!';
    
    document.getElementById('formContato').reset();
});