function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const retorno = document.getElementById("retorno");
  const SalvarLogin = document.getElementById("salvarLogin").checked;

  retorno.innerHTML = `Email: ${email}<br>Senha: ${senha}<br>Salvar Login: ${SalvarLogin}`;
}

function validarEmail() {
  const emailInput = document.getElementById("email");
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/;
  const retorno = document.getElementById("retorno");
  if (!pattern.test(emailInput.value)) {
    retorno.textContent = "E-mail inválido!";
    retorno.style.color = "red";
    return false;
  }
  retorno.textContent = "";
  login();
  retorno.style.color = "green";
  return false;
}
