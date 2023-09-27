document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('#').addEventListener('submit', function (evento) {
        evento.preventDefault();//evento.preventDefault para nao atualizar a pagina
        let numeroMaximo = document.getElementById('#').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;//numero randomico
        numeroAleatorio = Math.floor(numeroAleatorio + 1);//floor para media tirar ./, e dar numero inteiro

        document.getElementById('#').innerText = numeroAleatorio;//innerText para alert
        document.querySelector('#').style.display = 'block';//css para ativiçao 
    })
})