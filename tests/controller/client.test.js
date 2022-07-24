const { createClient, login } = require('../../src/controllers/client.controller');
const service = require('../../src/services/client.service');
const { expect } = require('chai');
const sinon = require('sinon');

describe('Ao chamar o createClient do controller', () => {
  describe('quando o payload for validado', () => {  
    const req = {};
    const res = {};
    const next = sinon.spy();
    beforeEach(() => {
      req.body = {
        name: 'sabrina',
        email: 'sabrin@gmail.com',
        password: '1233445567'
      };

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(service, 'createClient').resolves(true);
    });

    afterEach(() => {
      service.createClient.restore();
    })

    it('retorna um o status 201', async () => {    

      await createClient(req, res, next);
      expect(res.status.calledWith(201)).to.be.true;
    });
    
    it('o response é um objeto', async () => {
      await createClient(req, res, next);
      expect(res).to.be.an('object');
    });
  });

    describe('quando o payload for validado', () => {  
      const req = {};
      const res = {};
      const next = sinon.spy();
      
      beforeEach(() => {
        req.body = {
          email: 'sabrin@gmail.com',
          password: '1233445567'
        };
  
        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();
  
        sinon.stub(service, 'createClient').resolves(false);
      });
  
      afterEach(() => {
        service.createClient.restore();
      });

      it('é chamado o método next', async () => {
        try {

          await createClient(req, res, next);
        } catch(e) {
          expect(next.calledWith(e));
        }
      });
  });
});