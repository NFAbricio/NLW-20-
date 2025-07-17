# NLW Agents

Este é o projeto **NLW Agents**, desenvolvido durante o evento da [Rocketseat](https://www.rocketseat.com.br/). Trata-se de uma aplicação web moderna utilizando React, com foco em boas práticas de arquitetura, design system e experiência do desenvolvedor.

## Tecnologias e Bibliotecas Utilizadas

- **React 19** – Biblioteca principal para construção da interface.
- **TypeScript** – Tipagem estática para maior segurança e produtividade.
- **Vite** – Ferramenta de build e desenvolvimento rápido.
- **React Router DOM** – Gerenciamento de rotas SPA.
- **@tanstack/react-query** – Gerenciamento de dados assíncronos e cache.
- **TailwindCSS** – Utilitário para estilização rápida e responsiva.
- **tw-animate-css** – Animações utilitárias integradas ao Tailwind.
- **class-variance-authority, clsx, tailwind-merge** – Utilitários para composição dinâmica de classes CSS.
- **@radix-ui/react-slot** – Composição avançada de componentes.
- **lucide-react** – Biblioteca de ícones SVG.
- **biome** – Linter e formatter para padronização de código.
- **ultracite** – Configuração de estilo de código (via biome).

## Padrões de Projeto e Arquitetura

- **Componentização**: Componentes reutilizáveis organizados em `src/components/ui`.
- **Design System**: Uso de utilitários e variantes de estilo para padronização visual.
- **Hooks e Providers**: Consumo de dados com React Query e contexto global via Providers.
- **Roteamento SPA**: Separação de páginas em `src/pages` e navegação com React Router.
- **Aliases de importação**: Utilização de `@/` para facilitar imports (`@/components`, `@/lib/utils` etc).
- **Estilização utilitária**: TailwindCSS com customização de temas e suporte a dark mode.

## Estrutura do Projeto

```
web/
  ├── src/
  │   ├── app.tsx           # Configuração de providers e rotas
  │   ├── main.tsx          # Ponto de entrada da aplicação
  │   ├── index.css         # Estilos globais e tema
  │   ├── components/
  │   │   └── ui/           # Componentes de interface reutilizáveis
  │   ├── lib/              # Utilitários (ex: composição de classes)
  │   └── pages/            # Páginas principais (ex: criar sala, sala)
  ├── public/               # Assets públicos
  ├── package.json          # Dependências e scripts
  ├── vite.config.ts        # Configuração do Vite e aliases
  └── tsconfig*.json        # Configurações do TypeScript
```

## Instruções de Setup e Configuração

1. **Pré-requisitos**:
   - Node.js 18+ e npm

2. **Instalação das dependências**:
   ```bash
   npm install
   ```

3. **Rodando o projeto em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Build para produção**:
   ```bash
   npm run build
   ```

5. **Preview do build de produção**:
   ```bash
   npm run preview
   ```

6. **Padronização de código**:
   - O projeto utiliza o [Biome](https://biomejs.dev/) para lint e format. Execute:
     ```bash
     npx biome check .
     npx biome format .
     ```

## Observações

- O projeto não possui testes automatizados configurados até o momento.
- O design system utiliza o estilo "new-york" e ícones da Lucide.
- O tema dark é suportado nativamente via TailwindCSS.

---

Projeto desenvolvido durante o **NLW Agents** da Rocketseat 🚀 