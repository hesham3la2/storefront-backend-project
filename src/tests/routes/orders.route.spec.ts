import supertest from 'supertest';

import app from '../../server';

const request = supertest(app);

describe('orders endpoint', () => {
  it('index: GET /orders', async () => {
    const response = await request.get('/orders');
    expect(response.status).toBe(200);
  });
  it('getOderByUser: GET /orders/:id/users', async () => {
    const response = await request.get('/orders/1/users').set({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZmlyc3RuYW1lIjoiSm9obiBEb2UiLCJsYXN0bmFtZSI6MTUxNjIzOTAyMn0.B5p_Kq6hOneLL59nV_oTH072J5ywTmXmoTWroBUsD_s',
    });
    expect(response.status).toBe(200);
  });

  it('create: POST /orders', async () => {
    const response = await request
      .post('/orders')
      .set({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZmlyc3RuYW1lIjoiSm9obiBEb2UiLCJsYXN0bmFtZSI6MTUxNjIzOTAyMn0.B5p_Kq6hOneLL59nV_oTH072J5ywTmXmoTWroBUsD_s',
      })
      .send({ user_id: 1 });
    expect(response.status).toBe(200);
  });
});
