/* ==========================================================================
   SCRIPT DA LANDING PAGE DO ADVOGADO
   --------------------------------------------------------------------------
   A página funciona sem este arquivo. Ele só adiciona dois pequenos extras:
   1. Perguntas frequentes: ao abrir uma pergunta, as outras se fecham.
   2. Rodapé: atualiza o ano automaticamente.
   ========================================================================== */

/* 1. FAQ: apenas uma pergunta aberta por vez
   Para permitir várias abertas ao mesmo tempo, apague este bloco. */
const perguntas = document.querySelectorAll(".faq-list details");

perguntas.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return; // Só age quando a pergunta foi aberta
    perguntas.forEach((outra) => {
      if (outra !== item) outra.open = false; // Fecha todas as outras
    });
  });
});

/* 2. ANO AUTOMÁTICO NO RODAPÉ
   No HTML, use: <span id="ano"></span> */
const anoEl = document.getElementById("ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();
