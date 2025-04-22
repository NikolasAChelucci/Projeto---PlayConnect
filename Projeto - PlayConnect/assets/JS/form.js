const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

function setTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        icon.textContent = "🌙";
        toggle.checked = true;
    } else {
        document.body.classList.remove("dark-mode");
        icon.textContent = "🌞";
        toggle.checked = false;
    }
    localStorage.setItem("theme", mode);
}

// Ao carregar a página
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Quando o usuário alternar
toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "dark" : "light";
    setTheme(newTheme);
});





const formulario = document.getElementById('formularioContato');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemInput = document.getElementById('mensagem');
const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroAssunto = document.getElementById('erroAssunto');
const erroMensagem = document.getElementById('erroMensagem');

formulario.addEventListener('submit', function (event) {
    let valido = true;

    // Validação do Nome
    if (nomeInput.value.trim() === '') {
        erroNome.textContent = 'Por favor, digite seu nome.';
        nomeInput.classList.add('input-erro');
        valido = false;
    } else {
        erroNome.textContent = '';
        nomeInput.classList.remove('input-erro');
    }

    if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
        erroEmail.textContent = 'Por favor, digite um e-mail válido.';
        emailInput.classList.add('input-erro');
        valido = false;
    } else {
        erroEmail.textContent = '';
        emailInput.classList.remove('input-erro');
    }

    if (assuntoInput.value.trim() === '') {
        erroAssunto.textContent = 'Por favor, digite um assunto.';
        assuntoInput.classList.add('input-erro');
        valido = false;
    } else {
        erroAssunto.textContent = '';
        assuntoInput.classList.remove('input-erro');
    }

    if (mensagemInput.value.trim() === '') {
        erroMensagem.textContent = 'Por favor, digite sua mensagem.';
        mensagemInput.classList.add('input-erro');
        valido = false;
    } else {
        erroMensagem.textContent = '';
        mensagemInput.classList.remove('input-erro');
    }

    if (!valido) {
        event.preventDefault();
    }
});