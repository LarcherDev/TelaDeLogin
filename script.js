function login() {
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const retorno = document.getElementById("retorno");

retorno.innerHTML = `Email: ${email}<br>Senha: ${senha}`;
}
