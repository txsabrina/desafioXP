const { expect } = require('chai');
const { beforeEach } = require('mocha');
const sinon = require('sinon');
const { Client } = require('../../src/database/models');
const {getBalance} = require('../../src/services/account.service');

describe('Quando chamada a função getBalance', () => {
  describe('deve retornar', () => {
    const mock = {
      codClient: 2,
      balance: 50,
    };

    beforeEach(() => {
      sinon.stub(Client, 'findOne').resolves(mock)
    });

    afterEach(() => {
      Client.findOne.restore();
    });
    
    it('um objeto', async () => {
      const result = await getBalance(2);
      console.log('resultado>>', result)

      expect(result).to.be.an('object');
    });
    it('o objeto não esta vazio', async () => {
      const result = await getBalance(2);

      expect(result).to.be.not.empty;
    });
  });
});