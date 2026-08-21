const { sumar, restar, multiplicar, dividir, esPrimo } = require('../src/calculadora');

describe('Modulo calculadora', () => {
  test('sumar: suma dos numeros positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('restar: resta correctamente valores negativos', () => {
    expect(restar(2, 5)).toBe(-3);
  });

  test('multiplicar: multiplica dos numeros', () => {
    expect(multiplicar(4, 5)).toBe(20);
  });

  test('dividir: divide correctamente', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('dividir: lanza error al dividir entre cero', () => {
    expect(() => dividir(10, 0)).toThrow('No se puede dividir entre cero');
  });

  test('esPrimo: identifica numeros primos correctamente', () => {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(8)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});
