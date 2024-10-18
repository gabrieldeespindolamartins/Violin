function login(){
    let email = document.getElementById('login-email').value
    let password = document.getElementById('login-password').value
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    let usuario = usuario.find(usuario => usuario.email === email
    && atob(usuario.senha) === password )

    if(usuario){
        //armarzenar que está logado no session storage
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))
        //redirecionar para a hoje
        window.location.href = 'home.html'
    } else {
        document.getElementById('mensagem').innerText = 'Email ou senha incorretos'
        return
    }
}