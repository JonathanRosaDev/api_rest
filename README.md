API REST para gerenciamento de usuários, alunos e fotos, desenvolvida com Node.js, Express e Sequelize.

🔗 Links

📄 Documentação interativa (Swagger): https://jonathanrosadev.github.io/api_rest/

👤 Usuário de demonstração

Para testar as rotas protegidas localmente, utilize as credenciais abaixo no endpoint POST /tokens:


email: demo@teste.com
password: 123456


🚀 Tecnologias


Node.js
Express
Sequelize — ORM para banco de dados
MariaDB — Banco de dados relacional
JWT (JSON Web Token) — Autenticação
Multer — Upload de arquivos
Sucrase — Transpilação para produção
Swagger (OpenAPI 3.0) — Documentação interativa


📋 Rotas da API

🔑 Tokens (Autenticação)


POST /tokens — Realiza login e gera token JWT


👥 Users (Usuários)


GET /users — Lista todos os usuários
GET /users/:id — Mostra um usuário específico
POST /users — Cria um novo usuário 🔒
PUT /users — Edita o próprio usuário autenticado 🔒
DELETE /users — Deleta o próprio usuário autenticado 🔒



⚠️ Um usuário só pode editar e deletar a si mesmo.



🎓 Alunos


GET /alunos — Lista todos os alunos
GET /alunos/:id — Mostra um aluno específico
POST /alunos — Cria um novo aluno 🔒
PUT /alunos/:id — Edita um aluno 🔒
DELETE /alunos/:id — Deleta um aluno 🔒


📷 Photos (Fotos)


POST /photos — Adiciona uma foto a um aluno 🔒



Um aluno pode ter várias fotos. O upload usa multipart/form-data com os campos photo (arquivo) e aluno_id.



⚙️ Como rodar localmente

Pré-requisitos


Node.js 16+
MariaDB ou MySQL
npm


Instalação

bash# Clone o repositório
git clone https://github.com/JonathanRosaDev/api_rest.git
cd api_rest

# Instale as dependências
npm install

Configuração

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

envAPP_PORT=3001
APP_URL=http://localhost:3001
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
DB_DIALECT=mariadb
TOKEN_SECRET=sua_chave_secreta
TOKEN_EXPIRATION=7d

Banco de dados

bash# Execute as migrations
npx sequelize db:migrate

Executar em desenvolvimento

bashnpm run dev

A API estará disponível em http://localhost:3001 e a documentação em http://localhost:3001/api-docs.

📦 Build para produção

bashnpm run build
npm start

Os arquivos compilados serão gerados na pasta dist/.

📄 Licença

Este projeto foi desenvolvido para estudar as tecnologias listadas.
