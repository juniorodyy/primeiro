const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});

lab.test('retorno da soma de 5 e 10 deve ser 15', (done) => {

    Code.expect(soma(5,10)).to.equal(15);
    done();
  });

  lab.test('retorno da soma de nenhum numero é 5', (done) => {

      Code.expect(soma(5,)).to.equal(5);
      done();
  });

  lab.test('retorno da soma de -5 e 10 deve ser 10', (done) => {

      Code.expect(soma(-5,10)).to.equal(10);
      done();
  });

  lab.test('A soma de letras é igual a 0', (done) => {

      Code.expect(soma(5,a)).to.equal(5);
      done();
  });
  lab.test('retorno da soma de -5 e -10 deve ser -20', (done) => {

      Code.expect(soma(-5,10)).to.equal(-20);
      done();
  });
  lab.test('retorno da soma de deve ser ', (done) => {

      Code.expect(soma(,)).to.equal();
      done();
  });
