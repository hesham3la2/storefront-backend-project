import supertest from 'supertest';

import app from '../../server';

const request = supertest(app);

describe('products endpoint', () => {
  const testProduct = { name: 'product', price: 100, category_id: 1 };

  it('index: GET /products', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
  });
  it('show: GET /products/:id', async () => {
    const response = await request.get('/products/1');
    expect(response.status).toBe(200);
  });
  it('create: POST /products', async () => {
    const response = await request.post('/products').send(testProduct);
    expect(response.status).toBe(200);
  });
});
