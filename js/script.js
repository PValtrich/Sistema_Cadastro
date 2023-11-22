var fzlogin = false;
function red() {
}
function salvar() {
    var nome = document.querySelector('#nome');
    var senha = document.querySelector('#password');
    var senha2 = document.querySelector('#password2');
    if ((nome === null || nome === void 0 ? void 0 : nome.value) != "" && (senha === null || senha === void 0 ? void 0 : senha.value) != "" && nome && senha) {
        if ((senha === null || senha === void 0 ? void 0 : senha.value) == (senha2 === null || senha2 === void 0 ? void 0 : senha2.value)) {
            window.localStorage.setItem('user', nome.value);
            window.localStorage.setItem('senha', senha.value);
            alert('conta criada com sucesso!');
            window.open("../index.html", '_blank');
        }
        else {
            alert("a confirmação da senha não confere");
        }
    }
}
var u = window.localStorage.getItem('user');
var s = window.localStorage.getItem('senha');
function pegatexto() {
    var usuario = document.querySelector('#usuario');
    var senha = document.querySelector('#password');
    console.log(u);
    var fzlogin = false;
    if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) == u) {
        if ((senha === null || senha === void 0 ? void 0 : senha.value) == s) {
            fzlogin = true;
        }
    }
    if (fzlogin == true) {
        alert('seja bem vindo!');
    }
    else {
        alert('usuario ou senha incorreto');
    }
}
