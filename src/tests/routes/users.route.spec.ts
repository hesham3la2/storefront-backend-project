import supertest from 'supertest';

import app from '../../server';

const request = supertest(app);

describe('users endpoint', () => {
  const testUser = {
    firstname: 'first',
    lastname: 'last',
    email: 'email2@email.com',
    password: 'hashed-string',
  };
  it('index: GET /users', async () => {
    const response = await request.get('/users').set({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZmlyc3RuYW1lIjoiSm9obiBEb2UiLCJsYXN0bmFtZSI6MTUxNjIzOTAyMn0.B5p_Kq6hOneLL59nV_oTH072J5ywTmXmoTWroBUsD_s',
    });
    expect(response.status).toBe(200);
  });
  it('show: GET /users/:id', async () => {
    const response = await request.get('/users/1').set({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZmlyc3RuYW1lIjoiSm9obiBEb2UiLCJsYXN0bmFtZSI6MTUxNjIzOTAyMn0.B5p_Kq6hOneLL59nV_oTH072J5ywTmXmoTWroBUsD_s',
    });
    expect(response.status).toBe(200);
  });
  it('create: POST /users', async () => {
    const response = await request
      .post('/users')
      .set({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZmlyc3RuYW1lIjoiSm9obiBEb2UiLCJsYXN0bmFtZSI6MTUxNjIzOTAyMn0.B5p_Kq6hOneLL59nV_oTH072J5ywTmXmoTWroBUsD_s',
      })
      .send(testUser);
    expect(response.status).toBe(200);
  });
  it('login: POST /users/login', async () => {
    const response = await request
      .post('/users/login')
      .send({ email: 'email2@email.com', password: 'hashed-string' });
    expect(response.status).toBe(200);
  });
});
