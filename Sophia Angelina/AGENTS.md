# Regras Permanentes para Agentes e Desenvolvimento (AGENTS.md)

Este documento estabelece as diretrizes permanentes de arquitetura, estilo, boas práticas e conduta técnica para o desenvolvimento do portfólio pessoal da **Sophia Angelina Silveira**.

---

## 1. Princípios Fundamentais

1. **Autoral e Kawaii:** O design deve ser genuíno, delicado, charmoso e expressar a personalidade da Sophia (17 anos, estudante de TI e Design Gráfico). Evite templates genéricos, padrões corporativos frios ou layouts utilitários sem alma.
2. **Desenvolvimento Incremental:** Respeite rigorosamente a etapa de desenvolvimento em andamento. Não crie seções completas futuras ("Sobre mim", "Projetos", "Habilidades", "Contato") antes de serem solicitadas.
3. **Fidelidade às Informações:** Nunca invente dados biográficos, experiências profissionais ou projetos que não tenham sido expressamente fornecidos pela Sophia.
4. **Sem Dependências Pesadas / Sem Frameworks:** Utilize exclusivamente **HTML5 semântico**, **CSS3 puro** e **JavaScript vanilla (puro)**. Não use Bootstrap, Tailwind, React, Vue, jQuery ou similares.

---

## 2. Padrões de Código e Arquitetura

### Estrutura de Arquivos
- `index.html`: Marcação semântica, acessível e bem estruturada.
- `style.css`: Estilização modular com variáveis CSS (`:root`), classes coesas, foco em responsividade e animações suaves.
- `script.js`: Comportamentos e interações em JavaScript puro, sem poluir o escopo global.
- `AGENTS.md`: Diretrizes permanentes para agentes e desenvolvedores (este arquivo).
- `identidade.md`: Identidade visual, paleta de cores, tipografia e dados pessoais oficiais.
- `referencias.md`: Decisões de design, elementos estéticos kawaii e referências visuais.
- `funcionalidades.md`: Planejamento de funcionalidades, backlog e status das etapas.

### CSS
- Utilize **CSS Custom Properties (variáveis)** para cores, fontes, espaçamentos e transições.
- Separe o CSS em blocos organizados por comentários: Variáveis & Reset, Tipografia, Elementos Decorativos, Navegação, Hero, Componentes Interativos, Animações e Media Queries.
- Garanta suporte a `@media (prefers-reduced-motion: reduce)` desabilitando animações e transições quando solicitado pelo usuário.

### JavaScript
- Escreva código legível, modular e seguro com `document.addEventListener('DOMContentLoaded', ...)`.
- Trate eventos com delegação ou listeners específicos sem inline handlers (`onclick=`).
- Verifique existência de elementos antes de manipulá-los no DOM.

---

## 3. Acessibilidade e Responsividade

- **Responsividade total:** O layout deve se adaptar com elegância a smartphones (320px+), tablets (768px+) e desktops (1024px+ e telas ultra-wide).
- **Contraste de cores (WCAG):** Os textos devem possuir contraste suficiente contra os fundos rosa, utilizando tons escuros e bem definidos (`#4A1228`, `#5C1D38`, `#7A284C`, `#942F5E`).
- **Cursor personalizado:** O cursor estilizado (estrelinha rosa) deve ser aplicado **apenas** em dispositivos apontadores com `@media (hover: hover) and (pointer: fine)`. Em telas touch e mobile, deve-se manter o comportamento nativo.
- **Teclado e foco:** Todos os botões e links navegáveis devem ter estados `:focus-visible` nítidos e charmosos.
- **Áreas de toque:** Elementos interativos devem ter tamanho mínimo de 44x44px em telas touch.

---

## 4. Regras para Alterações Futuras

- Consulte sempre `identidade.md`, `referencias.md` e `funcionalidades.md` antes de qualquer intervenção.
- Não deixe links quebrados ou âncoras para páginas inexistentes; preveja estados informativos e amigáveis para elementos ainda em construção.
- Ao concluir alterações, informe resumidamente o que foi feito e os arquivos impactados.

