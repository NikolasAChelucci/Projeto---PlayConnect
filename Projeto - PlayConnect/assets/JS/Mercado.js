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

// ===== CARROSSEL DE JOGOS BRASILEIROS =====
const jogosBrasileiros = [
    {
        nome: "Dandara",
        imagem: "../images/dandara.jpg",
        descricao: "Metroidvania inspirado na heroína quilombola Dandara dos Palmares",
        preco: 29.99,
        tags: ["Plataforma", "Aventura"]
    },
    {
        nome: "Pocket Bravery",
        imagem: "../images/pocket.jpg",
        descricao: "Jogo de luta em pixel art com personagens brasileiros",
        preco: 39.99,
        tags: ["Luta", "Retrô"]
    },
    {
        nome: "Horizon Chase Turbo",
        imagem: "../images/horizonchase.jpg",
        descricao: "Corrida arcade inspirada nos clássicos dos anos 90",
        preco: 36.99,
        tags: ["Corrida", "Arcade"]
    }
];

const carrosselContainer = document.createElement('div');
carrosselContainer.className = 'carrossel-container';
document.querySelector('.pesquisa-img').replaceWith(carrosselContainer);

// Botões de navegação
carrosselContainer.innerHTML = `
        <button class="carrossel-btn prev" title = "clique aqui para voltar o carrossel">❮</button>
        <div class="carrossel"></div>
        <button class="carrossel-btn next" title = "clique aqui para avançar o carrossel">❯</button>
      `;

const carrossel = carrosselContainer.querySelector('.carrossel');
let currentIndex = 0;

function renderCarrossel() {
    carrossel.innerHTML = `
          <div class="jogo-card">
            <img src="${jogosBrasileiros[currentIndex].imagem}" alt="${jogosBrasileiros[currentIndex].nome}">
            <h3>${jogosBrasileiros[currentIndex].nome}</h3>
            <p>${jogosBrasileiros[currentIndex].descricao}</p>
            <span class="preco">R$ ${jogosBrasileiros[currentIndex].preco.toFixed(2)}</span>
            <div class="tags">${jogosBrasileiros[currentIndex].tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          </div>
        `;
}

carrosselContainer.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % jogosBrasileiros.length;
    renderCarrossel();
});

carrosselContainer.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + jogosBrasileiros.length) % jogosBrasileiros.length;
    renderCarrossel();
});

renderCarrossel();

// ===== FILTRO DE CATEGORIAS =====
const categorias = ["Todos", "Plataforma", "Luta", "Aventura", "Corrida"];
const filtroContainer = document.createElement('div');
filtroContainer.className = 'filtro-categorias';
filtroContainer.innerHTML = `
        <h3>Filtrar por categoria:</h3>
        <div class="categorias">
          ${categorias.map(cat => `<button class="categoria-btn">${cat}</button>`).join('')}
        </div>
      `;
document.querySelector('.pesquisa').prepend(filtroContainer);

// ===== EFEITOS DE HOVER =====
document.querySelectorAll('.pesquisa').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.02)';
        section.style.boxShadow = '0 5px 15px rgba(255, 106, 0, 0.3)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = '';
        section.style.boxShadow = '';
    });
});