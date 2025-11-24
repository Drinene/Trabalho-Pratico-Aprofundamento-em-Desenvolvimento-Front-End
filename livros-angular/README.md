# Trabalho Prático - Aprofundamento em Desenvolvimento Front-End

## Sistema de Catálogo de Livros

Trabalho prático da disciplina **DGT2809 - Aprofundamento em Desenvolvimento Front-End**

### Objetivos
- Implementar serviços injetáveis no Angular
- Desenvolver componentes com TypeScript e HTML
- Utilizar gerenciamento de formulários
- Implementar sistema de navegação com rotas

### Tecnologias Utilizadas
- Angular 17+
- TypeScript
- Bootstrap 5
- Angular Forms
- Angular Router

### Funcionalidades
- ✅ Listagem de livros
- ✅ Cadastro de novos livros
- ✅ Exclusão de livros
- ✅ Navegação entre páginas
- ✅ Formulários com validação

### Como Executar
```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
ng serve

# Acessar no navegador
http://localhost:4200

src/app/
├── livro.ts                    # Classe Livro
├── editora.ts                  # Classe Editora
├── controle-editora.service.ts # Serviço de editoras
├── controle-livros.service.ts  # Serviço de livros
├── livro-lista/                # Componente de listagem
├── livro-dados/                # Componente de cadastro
├── app.module.ts               # Módulo principal
└── app-routing.module.ts       # Configuração de rotas