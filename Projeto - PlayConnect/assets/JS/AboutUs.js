// Sistema de Tabs melhorado
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = {
        atual: document.getElementById('atual'),
        antigo: document.getElementById('antigo')
    };

    // Função para alternar abas
    function switchTab(tabId) {
        // Atualiza estado dos botões
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabId);
        });

        // Alterna visibilidade das seções
        for (const [key, section] of Object.entries(sections)) {
            section.style.display = key === tabId ? 'grid' : 'none';

            // Dispara animações ao mostrar
            if (key === tabId) {
                const cards = section.querySelectorAll('.card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.1}s`;
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.5s forwards';
                    }, 50);
                });
            }
        }
    }

    // Event listeners para as tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Efeitos de hover dinâmicos
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-7px) scale(1.02)';
            card.style.boxShadow = '0 12px 25px rgba(255, 106, 0, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(255, 106, 0, 0.1)';
        });
    });

    // Inicializa com a primeira tab ativa
    switchTab('atual');
});