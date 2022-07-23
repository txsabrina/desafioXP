const { expect } = require('chai');
const sinon = require('sinon');
const { Client } = require('../../src/database/models');
const { createClient } = require('../../src/services/client.service');
const { createToken } = require('../../src/helpers/token');
describe('Quando chamada a função create', () => {
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

      const token = createToken(mockClient)
      
      sinon.stub(Client, 'findOrCreate').resolves(mockClient)

      const result = await createClient(client);

      expect(result).to.be.equal(token);
    });
  });
})