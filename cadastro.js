//lembre de colocar as opções 'confirmar senha' e 'confirmar gmail' no cadastro junto com um ID para cada

function cadastrarUsuario() {
        //chamando os id em variavei
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let confirmEmail = document.getElementById('confirm-email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    //pegando dados dos usuarios na localstorage ou criando lista vazia caso nao tenha dados armazenados
    let usuarios = JSON.parse(localStorage.getItem('usuario')) || []

    //validando confirmar email e confirmar senha
    if(email !== confirmEmail){
        document.getElementById('mensagem').innerText = 'Emails estao diferentes'
        return
    }
    if(password !== confirmPassword){
        document.getElementById('mensagem').innerText = 'senhas estao diferentes'
        return
    }

    //verificando se o email ja foi usado para algum cadastro
    let usuarioExistente = usuarios.find(usuario => usuario.email === emailmail)
    if(usuarioExistente){
        document.getElementById('mensagem').innerText = 'email ja cadastrado'
        return
    }

    //criando um objeto usuario para colocar na lista de usuarios
    let novoUsuario = {
        id: Date.now(),
        nome: name,
        email: email,
        senha: btoa(password),  //salvando a senha com criptografia 
        playlists: []
    }

    //colocar o objeto novoUsuario no fim da lista de usuarios
    usuarios.push(novoUsuario)

    //salvar na localSotrage
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    setTimeout(() => {
        window.location.href = 'index.html'
    }, 4000)

    function voltar(){
        window.location.href = 'index.html'
    }
} 
