const request = require('supertest');
const app = require('../src/app');

describe('API endpoints', () => {
  test('GET / responde con mensaje de bienvenida', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBeDefined();
  });

  test('GET /health responde status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('POST /sumar suma correctamente via API', async () => {
    const res = await request(app).post('/sumar').send({ a: 3, b: 4 });
    expect(res.body.resultado).toBe(7);
  });

  test('POST /dividir retorna error 400 al dividir entre cero', async () => {
    const res = await request(app).post('/dividir').send({ a: 5, b: 0 });
    expect(res.statusCode).toBe(400);
  });

  test('GET /primo/:n identifica un numero primo', async () => {
    const res = await request(app).get('/primo/13');
    expect(res.body.esPrimo).toBe(true);
  });
});
