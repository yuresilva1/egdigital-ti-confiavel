# Diretrizes de Desenvolvimento (AI Rules)

Este documento descreve a pilha de tecnologia e as regras de uso de bibliotecas para garantir a consistência e a manutenibilidade do projeto.

## 1. Pilha de Tecnologia

O projeto é construído com as seguintes tecnologias principais:

*   **Framework:** React (com ambiente de desenvolvimento Vite).
*   **Linguagem:** TypeScript.
*   **Roteamento:** React Router DOM.
*   **Estilização:** Tailwind CSS (abordagem utility-first).
*   **Componentes UI:** shadcn/ui (baseado em Radix UI) para componentes de interface.
*   **Ícones:** Lucide React.
*   **Gerenciamento de Estado/Dados:** Tanstack Query (React Query) para gerenciamento de estado do servidor.
*   **Formulários:** React Hook Form para gerenciamento de formulários, utilizando Zod para validação de schemas.
*   **Notificações:** Sistema de Toast (via `use-toast` do shadcn/ui) e Sonner.

## 2. Regras de Uso de Bibliotecas e Estrutura

### Estrutura de Arquivos
*   **Páginas:** Devem ser criadas em `src/pages/`.
*   **Componentes:** Devem ser criados em `src/components/`.
*   **Componentes UI (shadcn):** Devem ser importados de `src/components/ui/`. Não modifique arquivos dentro de `src/components/ui/`.

### Estilização
*   **Tailwind CSS:** Use classes do Tailwind CSS para toda a estilização.
*   **Responsividade:** Todos os componentes devem ser responsivos por padrão.
*   **Cores e Temas:** Utilize as variáveis de cor definidas em `src/index.css` e `tailwind.config.ts` (ex: `bg-primary`, `text-accent`).

### Componentes de UI
*   **Prioridade:** Sempre utilize os componentes existentes do `shadcn/ui` (ex: `Button`, `Input`, `Textarea`).
*   **Customização:** Se for necessário criar uma variação complexa de um componente, crie um novo componente em `src/components/` que utilize o componente base do shadcn/ui.

### Roteamento
*   **React Router DOM:** Use `Link` para navegação interna e `useLocation` para determinar o estado ativo da rota. As rotas principais devem ser mantidas em `src/App.tsx`.

### Formulários
*   **React Hook Form:** É obrigatório o uso do React Hook Form para gerenciar o estado e a submissão de formulários.
*   **Validação:** Utilize Zod em conjunto com `@hookform/resolvers` para definir e aplicar schemas de validação.

### Ícones
*   **Lucide React:** Use exclusivamente ícones da biblioteca `lucide-react`.

### Notificações
*   **Toasts:** Use o hook `useToast` (importado de `@/hooks/use-toast`) para exibir notificações imperativas (ex: sucesso ou erro após submissão de formulário).
*   **Sonner:** Use o componente `Sonner` (já configurado em `src/App.tsx`) para notificações mais simples e estilizadas, se necessário.