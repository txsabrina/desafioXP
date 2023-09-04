# Repositório da API do desafio XP

Esta API foi criada como parte de um desafio no processo seletivo para a equipe de tecnologia do banco XP. Ela oferece funcionalidades essenciais para uma aplicação de banco de investimentos, incluindo:

- Criação de novos cadastros
- Autenticação de usuários
- Consulta de saldo
- Visualização de ativos disponíveis para venda
- Acompanhamento de ativos comprados
- Execução de operações de compra e venda de ativos
- Realização de saques e depósitos na conta

Para desenvolver essa API desafiadora, utilizei a linguagem Node.js e o MySQL, com a biblioteca ORM Sequelize para acessar e gerenciar o banco de dados. Adotei  a arquitetura REST para a organização do projeto e empreguei as bibliotecas de teste Chai, Sinon e Mocha para garantir a qualidade e segurança do código.

Além disso, foram incorporadas bibliotecas como JWT (para criação de tokens e autenticação), Bcrypt (para criptografia de senhas e reforço da segurança) e Joi (para validações de dados). Este projeto representa uma conquista significativa no contexto do desafio proposto pelo banco XP.

<details>
  <summary><strong>‼️ Como iniciar a aplicação </strong></summary>

1. Clone o repositório
  * `git clone git@github.com:txsabrina/desafioXP.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd desafioXP`

2. Instale as dependências
  * `npm install`

3. Crie o banco de dados 
  * `npm run prestart`

4. Adicione os seeders para popular o banco de dados
  * `npm run seed`

5. Inicie a aplicação
  * `npm run start`

6. Para rodar testes
  * `npm run test`

  
<br />
</details>

