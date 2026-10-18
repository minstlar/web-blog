// Pega todos os botões de aba
const abas = document.querySelectorAll(".aba");
// Pega todos os painéis de conteúdo
const conteudos = document.querySelectorAll(".conteudo");

// Para cada botão de aba, adiciona o evento de clique
abas.forEach(botao => {
    botao.addEventListener("click", () => {
        // Qual aba foi clicada? (data-aba="home", "sobre", etc.)
        const alvo = botao.dataset.aba;

        // Remove "ativa" de TODAS as abas e conteúdos
        abas.forEach(b => b.classList.remove("ativa"));
        conteudos.forEach(c => c.classList.remove("ativo"));

        // Adiciona "ativa" só na aba clicada e no conteúdo correspondente
        botao.classList.add("ativa");
        document.getElementById(alvo).classList.add("ativo");
    });
});