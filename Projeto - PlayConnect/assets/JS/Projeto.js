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

// Progress bars animation
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.dataset.progress;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = `${progress}%`;
        bar.style.transition = 'width 1s ease';
    }, 500);
});

// Interactive phase items
document.querySelectorAll('.phase-item').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('.phase-details');
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});

// Dynamic header shadow
window.addEventListener('scroll', () => {
    const header = document.querySelector('.steam-header');
    header.style.boxShadow = window.scrollY > 0 ?
        '0 0 15px rgba(26, 159, 255, 0.3)' :
        'none';
});

// Tooltip system
document.querySelectorAll('[data-tooltip]').forEach(element => {
    const tooltip = document.createElement('div');
    tooltip.className = 'steam-tooltip';
    tooltip.textContent = element.dataset.tooltip;
    document.body.appendChild(tooltip);

    element.addEventListener('mouseover', (e) => {
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 5}px`;
        tooltip.style.opacity = '1';
    });

    element.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
    });
});