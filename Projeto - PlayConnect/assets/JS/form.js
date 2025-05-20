import { setupThemeToggle, initVLibras, setupFormValidation } from './Utils.js';

const FIELD_CONFIG = {
    nome: {
        inputId: 'nome',
        errorId: 'erroNome',
        validator: (value) => value.trim() !== '',
        message: 'Por favor, digite seu nome.'
    },
    email: {
        inputId: 'email',
        errorId: 'erroEmail',
        validator: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Por favor, digite um e-mail válido.'
    },
    assunto: {
        inputId: 'assunto',
        errorId: 'erroAssunto',
        validator: (value) => value.trim() !== '',
        message: 'Por favor, digite um assunto.'
    },
    mensagem: {
        inputId: 'mensagem',
        errorId: 'erroMensagem',
        validator: (value) => value.trim() !== '',
        message: 'Por favor, digite sua mensagem.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle('themeToggle', 'themeIcon');
    setupFormValidation('formularioContato', FIELD_CONFIG);
    initVLibras();
});
