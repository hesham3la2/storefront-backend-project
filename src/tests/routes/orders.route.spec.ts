import supertest from 'supertest';

import app from '../../server';

const request = supertest(app);

describe('orders endpoint', () => {
  it('index: GET /orders', async () => {
    const response = await request.get('/orders');
    expect(response.status).toBe(200);
  });
  it('show: GET /orders/:id', async () => {
    const response = await request.get('/orders/1');
    expect(response.status).toBe(200);
  });
  it('create: POST /orders', async () => {
    const response = await request.post('/orders').send({ user_id: 1 });
    expect(response.status).toBe(200);
  });
});
