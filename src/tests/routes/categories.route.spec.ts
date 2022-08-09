import supertest from 'supertest';

import app from '../../server';

const request = supertest(app);

describe('categories endpoint', () => {
  it('index: GET /categories', async () => {
    const response = await request.get('/categories');
    expect(response.status).toBe(200);
  });
  it('show: GET /categories/:id', async () => {
    const response = await request.get('/categories/1');
    expect(response.status).toBe(200);
  });
  it('create: POST /categories', async () => {
    const response = await request.post('/categories').send({ name: 'test' });
    expect(response.status).toBe(200);
  });
});
