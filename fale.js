document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Erro ao enviar a mensagem.');
        }
    })
    .catch(error => {
        alert('Ocorreu um erro: ' + error);
    });
});
