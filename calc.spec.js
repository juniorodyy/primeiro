const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

const { expect } = require('code');

lab.test('retorno da soma de 2 e 3 é 5', (done) => {
    Code.expect(soma(2, 3)).to.equal(5);
    done ();

});
lab.test('retorno da soma de -2 e -5 é -7', (done) => {
    Code.expect(soma(-2, -5)).to.equal(-7);
done ();
});
lab.test('retorno da soma de -5 e 10 é 5', (done) => {

    Code.expect(soma(-5,10)).to.equal(5);
    done();
});
lab.test('Não passando no parametro', (done) => {
  const r = soma();
    expect(r.message).to.equal("parametro faltando");
    done();
});
lab.test('Soma de 0 ', (done) => {

    Code.expect(soma(0,10)).to.equal(10);
    done();
});
lab.test('soma de nada com nada', (done) => {
    const r = soma('a','b');
    expect(r.message).to.equal("parametro inválidos");
    done();
  });
