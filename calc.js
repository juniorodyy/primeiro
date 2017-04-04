'use strict';

function soma(a, b) {

if (a === undefined ||  b === undefined)
  return { message: 'parametro faltando'};

if (typeof a == 'string' || typeof b == 'string')
  return { message: 'parametro inválidos'};

  return a + b;
}

module.exports = { soma };
