import app from '../app.js'; 
import supertest from 'supertest';

const request = supertest(app);

describe('POST /weather', () => {
  it('Test with valid cityName', async () => {
    const response = await request.post('/weather').send({ cityName: 'London' });
    
    expect(response.status).toBe(200); 
    expect(response.body.weatherText).toBeDefined();
    
  });
});
