import supertest from 'supertest';

import app from '../../server';

const request = supertest(app);

describe('products endpoint', () => {
  const testProduct = { name: 'product', price: 100 };

  it('index: GET /products', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
  });
  it('show: GET /products/:id', async () => {
    const response = await request.get('/products/1');
    expect(response.status).toBe(200);
  });
  it('create: POST /products', async () => {
    const response = await request
      .post('/products')
      .set({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJKb2huIERvZSIsImxhc3RuYW1lIjoxNTE2MjM5MDIyfQ.kQ55gFtsatL2pcZbx1JgRidxB1KroIO-ATKoQ1eHvQ4',
      })
      .send(testProduct);
    expect(response.status).toBe(200);
  });
});
