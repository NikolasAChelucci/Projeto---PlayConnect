// =========================
// Importações
// =========================
import { themeManager, mathOperations, uiFactory } from './Utils.js';
import { initVLibras, setupThemeToggle } from './Utils.js';

// =========================
// Dados dos Jogos
// =========================
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

// =========================
// Aplicação de desconto
// =========================
function aplicarDesconto(jogos, percentual) {
  const descontoFn = mathOperations.applyDiscount(percentual);
  jogos.forEach(jogo => {
    jogo.precoOriginal = jogo.preco;
    jogo.precoPromocional = descontoFn(jogo.preco);
  });
}

// =========================
// Carrossel personalizado
// =========================
class Carrossel {
  constructor(jogos, containerSelector) {
    this.jogos = jogos;
    this.currentIndex = 0;
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    this.container.innerHTML = `
      <button class="carrossel-btn prev">❮</button>
      <div class="carrossel"></div>
      <button class="carrossel-btn next">❯</button>
    `;
    this.carrossel = this.container.querySelector('.carrossel');
    this.setupControls();
    this.render();
  }

  setupControls() {
    this.container.querySelector('.next').addEventListener('click', () => this.next());
    this.container.querySelector('.prev').addEventListener('click', () => this.prev());
  }

  render() {
    const jogo = this.jogos[this.currentIndex];
    this.carrossel.innerHTML = `
      <div class="jogo-card">
        <img src="${jogo.imagem}" alt="${jogo.nome}">
        <h3>${jogo.nome}</h3>
        <p>${jogo.descricao}</p>
        <span class="preco">R$ ${jogo.precoPromocional?.toFixed(2) || jogo.preco.toFixed(2)}</span>
        <div class="tags">${jogo.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      </div>
    `;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.jogos.length;
    this.render();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.jogos.length) % this.jogos.length;
    this.render();
  }
}

// =========================
// Filtro de Categorias
// =========================
function criarFiltroCategorias(categorias, containerSelector) {
  const filtro = document.createElement('div');
  filtro.className = 'filtro-categorias';
  filtro.innerHTML = `
    <h3>Filtrar por categoria:</h3>
    <div class="categorias">
      ${categorias.map(cat => `<button class="categoria-btn" data-cat="${cat}">${cat}</button>`).join('')}
    </div>
  `;
  document.querySelector(containerSelector).prepend(filtro);

  filtro.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const categoria = btn.dataset.cat;
      uiFactory.filterCarousel(categoria); // função externa do seu sistema
    });
  });
}

// =========================
// Efeito Hover em Seções
// =========================
function aplicarHoverEmSeções(selector) {
  document.querySelectorAll(selector).forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'scale(1.02)';
      section.style.boxShadow = '0 5px 15px rgba(255, 106, 0, 0.3)';
    });
    section.addEventListener('mouseleave', () => {
      section.style.transform = '';
      section.style.boxShadow = '';
    });
  });
}

// =========================
// Inicialização Principal
// =========================
function main() {
  setupThemeToggle('themeToggle', 'themeIcon'); // ou themeManager('themeToggle', 'themeIcon').init();
  aplicarDesconto(jogosBrasileiros, 30);
  new Carrossel(jogosBrasileiros, '.carrossel-container');
  criarFiltroCategorias(["Todos", "Plataforma", "Luta", "Aventura", "Corrida"], '.pesquisa');
  aplicarHoverEmSeções('.pesquisa');
  initVLibras();
}

document.addEventListener('DOMContentLoaded', main);
