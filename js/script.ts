let fzlogin= false

function red() {
    
}

function salvar() {
    let nome : HTMLInputElement | null = document.querySelector('#nome')
    let senha : HTMLInputElement | null = document.querySelector ('#password')
    let senha2 : HTMLInputElement | null = document.querySelector ('#password2')
    if (nome?.value != "" && senha?.value != "" && nome && senha) {
        if (senha?.value == senha2?.value) {
        window.localStorage.setItem('user', nome.value)
        window.localStorage.setItem('senha', senha.value)
        alert('conta criada com sucesso!')
        window.open("../index.html", '_blank')
        }
        else{
            alert("a confirmação da senha não confere")
        }
    }
}

let u = window.localStorage.getItem('user')
let s = window.localStorage.getItem('senha')

function pegatexto() {
    let usuario : HTMLInputElement | null = document.querySelector('#usuario');
    let senha : HTMLInputElement | null = document.querySelector('#password');
    console.log(u);
    let fzlogin= false

    if (usuario?.value == u) {
        if (senha?.value == s){
            fzlogin= true;
        }
    }

    if (fzlogin == true) {
        alert('seja bem vindo!')
    }
    else{
        alert('usuario ou senha incorreto')
    }
}