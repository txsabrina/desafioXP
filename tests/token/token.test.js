const { createToken } = require('../../src/helpers/token');
const { expect } = require('chai');

describe('Quando chamada a função de createToken', () => {
  
  it('é possivel gerar um token', () => {
    const name = 'sabrina';
    const token = createToken(name);

    expect(token).to.be.exist;
    expect(typeof(token)).to.be.equal('string');
  });
});