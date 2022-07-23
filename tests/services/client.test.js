const { expect } = require('chai');
const sinon = require('sinon');
const { Client } = require('../../src/database/models');
const { createClient, login } = require('../../src/services/client.service');

describe('Quando chamada a função create', () => {
  describe('caso ja exista um usuario com o email', () => {
    const mockClient = [{
      codClient: 7,
      name: 'sabrina',
      email: 'sabrin@gmail.com',
      balance: 0,
    },
    false];

    const client = {
      name: 'sabrina',
      email: 'sabrin@gmail.com',
      password: '1233445567'
    };
    
    beforeEach(() => {
      sinon.stub(Client, 'findOrCreate').resolves(mockClient);
    })
    
    afterEach(() => {
      Client.findOrCreate.restore();
    });
    
    it('retorna um erro com a mensagem "Email already registered"', async () => {
      try{
        await createClient(client);
      } catch(e){
        expect(e.message).to.be.equal('Email already registered!')
      }
    })
  });

  describe('em caso de sucesso', () => {
    
    beforeEach(sinon.restore);
    
    it("o retorno é um token", async () => {
      const mockClient = [{
        codClient: 7,
        name: 'sabrina',
        email: 'sabrin@gmail.com',
        balance: 0,
      },
      true];

      const client = {
        name: 'sabrina',
        email: 'sabrin@gmail.com',
        password: '1233445567'
      };
      
      sinon.stub(Client, 'findOrCreate').resolves(mockClient);

      const result = await createClient(client);

      /* expect(createToken).to.have.been.called; */
      expect(typeof(result)).to.be.a('string');
    });
  }); 
})

describe('Quando chamada a função login', () => {
  describe('em caso', () => {
    before(sinon.restore);

    const email = 'sabrin@gmail.com';
    const pass = '1232039483'
    
    sinon.stub(Client, 'findOne').throws;
    
    it('o email seja invalido, deve retornar um erro com a mensagem "Invalid email!" ', async () => {
      try {
        await login(email, pass);
      } catch (e) {
        expect(e.message).to.be.equal('Invalid email!')
      }
    });
  });
  
  describe('em caso de sucesso', async () => {
    const mockClient = {
      codClient: 7,
      name: 'sabrina',
      email: 'sabrin@gmail.com',
      password: '123455668',
      balance: 0,
    };

    const email = 'sabrin@gmail.com';
    const pass = '1232039483'
    
    sinon.stub(Client, 'findOne').resolves(mockClient);

    const result = await login(email, pass);
    
    it('deve retornar um token', () => {
      expect(result).to.be.a('string');
    });
  });
});