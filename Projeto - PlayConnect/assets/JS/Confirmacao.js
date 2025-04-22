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