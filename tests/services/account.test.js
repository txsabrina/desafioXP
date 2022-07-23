const { expect } = require('chai');
const sinon = require('sinon');
const { Client } = require('../../src/database/models');
const {getBalance} = require('../../src/services/account.service');

describe('Quando chamada a função getBalance', () => {
  describe('deve retornar', () => {
    it('um objeto', async () => {
      const result = await getBalance(2);

      expect(result).to.be.an('object');
    });
    it('o objeto deve conter 2 chaves', async () => {
      const result = await getBalance(2);

      expect(result).to.have.all.keys('codClient', 'balance');
    })
  })
})