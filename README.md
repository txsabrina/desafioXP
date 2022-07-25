# Repositório da API do desafio XP

Essa API foi desenvolvida para uma aplicação de um banco de investimentos;
Nesta será possivel

* Criar um novo cadastro 
* Fazer login 
* Consultar saldo
* Consultar ativos disponíveis para a venda
* Consultar ativos comprados
* Manipular ações de compra e venda de ativos
* Fazer saques e depósitos para a conta


### Bibliotecas e Ferramentas utilizadas

Para a criação dessa API, foi utilizada a linguagem *Node.js*.
*MySQL e a a Biblioteca de ORM  Sequelize* foram utilizados para acessar e manipular o banco de dados.
Em termos de organização e arquitetura, foi utilizado o padrão *REST*.
Já na parte de testes foram utilizadas as bibliotecas *Chai, Sinon e Mocha*

Abaixo será listado algumas outras bibliotecas de suporte para o desenvolvimento da aplicação:
- JWT (Para criação de token e autenticação);
- bcrypt (Para encryptar a senha do cliente, e garantir mais segurança);
- Joi (Para fazer algumas validções).

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

