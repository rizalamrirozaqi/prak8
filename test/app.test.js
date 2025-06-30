/* Unit test sederhana memakai Jest + Supertest */
const request = require('supertest');
const app = require('../app');           // import aplikasi

describe('GET /', () => {
  it('should return greeting JSON', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Jenkins demo!' });
  });
});
