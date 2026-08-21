 

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}

function esPrimo(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  esPrimo,
};
