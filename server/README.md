# NLW Agents

Projeto desenvolvido durante o evento **NLW da Rocketseat**.

## Descrição

API para gerenciamento de salas (rooms), utilizando Fastify, Drizzle ORM e PostgreSQL com suporte a extensões vetoriais (pgvector).

---

## Tecnologias e Bibliotecas Utilizadas

- **Node.js** (TypeScript)
- **Fastify**: Framework web para Node.js
- **@fastify/cors**: Middleware CORS para Fastify
- **fastify-type-provider-zod**: Integração de validação de tipos com Zod
- **Zod**: Validação de esquemas e variáveis de ambiente
- **Drizzle ORM**: ORM para TypeScript/Node.js
- **drizzle-kit**: Ferramentas de CLI para Drizzle ORM (migrações, geração de schema)
- **drizzle-seed**: Seed e reset de banco de dados
- **PostgreSQL** (com extensão pgvector)
- **Ultracite**: Utilitário para desenvolvimento
- **@biomejs/biome**: Linter e formatter

---

## Padrões de Projeto

- **Validação de ambiente**: Utiliza Zod para garantir variáveis de ambiente válidas.
- **Type-safe API**: Integração de tipos com Fastify e Zod.
- **Organização modular**: Separação clara entre rotas, conexão com banco, schemas e seeds.
- **Migrations e Seeds**: Gerenciados via Drizzle ORM e drizzle-seed.

---

## Setup e Configuração

### 1. Clonar o repositório

```bash
git clone <url-do-repo>
cd server
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

> O valor padrão do banco corresponde ao serviço do Docker Compose.

### 4. Subir o banco de dados com Docker

```bash
docker-compose up -d
```

Isso irá iniciar um container PostgreSQL com a extensão pgvector e rodar o script de setup inicial.

### 5. Rodar as migrations e seed

```bash
npm run db:seed
```

Isso irá resetar e popular o banco de dados com dados de exemplo.

### 6. Iniciar o servidor

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

---

## Endpoints

- `GET /health` — Health check
- `GET /rooms` — Lista todas as salas (rooms) cadastradas

---

## Estrutura do Banco de Dados

Tabela: **rooms**

| Campo       | Tipo       | Descrição           |
|-------------|------------|---------------------|
| id          | uuid       | Identificador único |
| name        | text       | Nome da sala        |
| description | text       | Descrição           |
| createdAt   | timestamp  | Data de criação     |

---

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor em modo desenvolvimento
- `npm run start` — Inicia o servidor em produção
- `npm run db:seed` — Reseta e popula o banco de dados
- `npx drizzle-kit studio` — Abre o Drizzle Studio para visualizar o banco de dados

--- 