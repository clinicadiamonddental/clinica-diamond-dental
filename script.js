// Seleciona elementos do DOM
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Adiciona evento de clique no ícone do hamburguer
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Adiciona ou remove a classe 'show'
});

// Adiciona rolagem suave ao clicar nos links do menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = link.getAttribute('href'); // Obtém o ID do elemento alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo
        
        // Rolagem suave para o elemento alvo
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Fecha o menu hamburguer se estiver aberto
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});
