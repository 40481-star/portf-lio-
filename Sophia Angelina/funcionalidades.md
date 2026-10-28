# Funcionalidades e Planejamento de Desenvolvimento (funcionalidades.md)

Este documento acompanha as funcionalidades planejadas, o roteiro de etapas e o status atual de implementação do portfólio da Sophia Angelina Silveira.

---

## 1. Status Geral do Portfólio

**Fase Atual:** Integração Completa de Todas as Seções do Portfólio (Concluída).

---

## 2. Seções Implementadas

### 1. Cabeçalho e Menu de Navegação Fixo
- Logotipo autoral com o nome "Sophia Angelina" e detalhe de laço kawaii.
- Navegação fixa com links diretos com scroll suave:
  - `Início` (`#hero`)
  - `Sobre mim` (`#sobre`)
  - `Habilidades` (`#habilidades`)
  - `Projetos` (`#projetos`)
  - `Contato` (`#contato`)
- Destaque dinâmico de seção ativa (scrollspy).
- Menu hambúrguer adaptável para smartphones, com fechamento automático ao clicar nos links.

### 2. Seção Hero (Boas-vindas)
- Retrato autoral oficial da Sophia (`assets/sophia.jpg`) com moldura circular kawaii em camadas, brilho suave, microinterações e badges de coração e estrelinha.
- Tag/Badge com identificação: *"Estudante de TI & Design Gráfico"*.
- Título de impacto com tipografia autoral: *"Sophia Angelina Silveira"*.
- Frase-chave de apresentação conectando criatividade, tecnologia e design.
- Botão de ação primário *"Conheça meu mundo"* (com rolagem suave para a seção "Sobre mim" ou abertura de modal com a bio oficial) e botão secundário com link direto para Contato.
- Pílulas com interesses: *Design Criativo*, *Análise de Dados* e *Tecnologia*.

### 3. Seção "Sobre mim" (`#sobre`)
- Trajetória pessoal, acadêmica e aspirações futuras apresentadas em blocos agradáveis de leitura.
- Retrato autoral em moldura decorativa complementar.
- Apresentação de metas futuras: carreira em tecnologia e interesse em concursos públicos para a área policial.
- Foco em curiosidade, criatividade e raciocínio lógico, sem invenção de qualificações não informadas.

### 4. Seção "Habilidades" (`#habilidades`)
- Organização em cards visuais delicados com ícones vetoriais e tons de rosa:
  - **Tecnologia:** Interesse em TI, estudos e práticas de informática, curiosidade pelo funcionamento de softwares e sistemas, interesse em desenvolvimento web.
  - **Design e Criatividade:** Interesse em Design Gráfico, páginas autorais, composição de layouts e decoração de interfaces.
  - **Desenvolvimento Pessoal:** Curiosidade, vontade constante de aprender, busca por evolução acadêmica e profissional.
- Tratamento explícito como áreas de interesse, estudo e desenvolvimento contínuo.

### 5. Seção "Projetos" (`#projetos`)
- Galeria visual estruturada com cards informativos:
  - Card de destaque autoral para o próprio Portfólio Pessoal (HTML5, CSS3, JavaScript puro).
  - Cards de estado visual elegante informando que novos projetos estão sendo preparados com carinho.
  - Botão destacado "Visite meu GitHub" direcionando para `https://github.com/` em nova aba com segurança (`target="_blank" rel="noopener noreferrer"`).
- Código preparado modularmente para inclusão de novos projetos com extrema facilidade.

### 6. Seção "Contato" (`#contato`)
- Canais de contato oficiais:
  - E-mail direto: `40481@raphaeldisanto.com.br` (`mailto:`)
  - Telefone / WhatsApp: `(19) 97168-3285` com link direto `https://wa.me/5519971683285`
- Ícones correspondentes e botões rápidos com efeitos hover suaves.
- Formulário demonstrativo com campos (Nome, E-mail, Mensagem), validação client-side via JavaScript e opção de disparo de e-mail pré-preenchido amigável.
- Notificações toast kawaii com feedbacks instantâneos para o usuário.

---

## 3. Acessibilidade, Estilo e Desempenho
- Paleta oficial: `#FFC7D7`, `#FF8CAD`, `#FFDBE5`, `#451225`, `#5A1E38`, `#80224A`.
- Cursor de estrelinha rosa preservado para ponteiros desktop fine-pointer.
- Barra de rolagem customizada em tons de rosa.
- Animações suaves ativadas por rolagem com suporte a `prefers-reduced-motion`.
- Foco visível acessível (`:focus-visible`) e compatibilidade total de 320px a telas ultra-wide.
