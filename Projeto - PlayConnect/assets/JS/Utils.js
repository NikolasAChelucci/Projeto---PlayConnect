export const initVLibras = () => new window.VLibras.Widget('https://vlibras.gov.br/app');

export const setupThemeToggle = (toggleId, iconId) => {
    const toggle = document.getElementById(toggleId);
    const icon = document.getElementById(iconId);

    const setTheme = (mode) => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        icon.textContent = mode === 'dark' ? '🌙' : '🌞';
        toggle.checked = mode === 'dark';
        localStorage.setItem('theme', mode);
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    toggle.addEventListener('change', () => setTheme(toggle.checked ? 'dark' : 'light'));
};

