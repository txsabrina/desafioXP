const { expect } = require('chai');
const { beforeEach } = require('mocha');
const sinon = require('sinon');
const { Client, Asset, ClientAsset } = require('../../src/database/models');
const {getBalance, getAssets, getAssetByClient} = require('../../src/services/account.service');

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

      expect(result).to.be.an('object');
    });
    it('o objeto não esta vazio', async () => {
      const result = await getBalance(2);

      expect(result).to.be.not.empty;
    });
  });
});

describe('Quando chamada a função getAssets', () => {
  describe('en caso de sucesso', () => {
    const assetsMock = {
      codAsset: 1,
      qttAssets: 300,
      value: 34
    };
    
    beforeEach(() => {
      sinon.stub(Asset, 'findOne').resolves(assetsMock);
    });

    afterEach(() => {
      Asset.findOne.restore();
    });
    
    it(' deve retornar um objeto', async () => {
      const result = await getAssets(2);

      expect(result).to.be.an('object');
    });
    
    it('o objeto não esta vazio', async () => {
      const result = await getAssets(2);

      expect(result).to.be.not.empty;
    });
  });
  
  describe('em caso nao ache um ativo', () => { 
    beforeEach(() => {
      sinon.stub(Client, 'findOne').throws;
    });

    afterEach(() => {
      Client.findOne.restore();
    });

    it('deve retornar um erro com a mensagem "Asset not found!"', async () => {
      
      try {
        await getAssets(2);
      } catch(e) {
        expect(e.message).to.be.equal('Asset not found!');
      }
    });
  });
});

describe('Quando chamada a função ', () => {
  describe('em caso de sucesso', () => {
    const mock = [
      {
        codClient: 1,
        codAsset: 3,
        qttAssets: 0,
        value: 14
      }
    ]
    
    beforeEach(() => {
      sinon.stub(ClientAsset, 'findAll').resolves(mock);
    });

    afterEach(() => {
      ClientAsset.findAll.restore();
    });

    it('deve retornar um array', async () => {
      const result = await getAssetByClient(1)

      expect(result).to.be.an('array');
    });

    it('ele esta vazio', async () => {
      const result = await getAssetByClient(1);

      expect(result).to.be.not.empty;
    });
  });

  describe('caso não seja encontrado nenhum asset', () => {
    const mock = [];
    
    beforeEach(() => {
      sinon.stub(ClientAsset, 'findAll').resolves(mock);
    });

    afterEach(() => {
      ClientAsset.findAll.restore();
    });

    it('deve retornar um array', async () => {
      const result = await getAssetByClient(1)

      expect(result).to.be.an('array');
    });

    it('ele esta vazio', async () => {
      const result = await getAssetByClient(1);

      expect(result).to.be.empty;
    });

  });
});

