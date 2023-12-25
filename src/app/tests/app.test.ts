import request from 'supertest'
import app from '../index'
import { RedisClient } from '../adapters/redis/redis.client';

describe('GET /', () => {
    beforeAll(async () => {
        await RedisClient.getInstance().connect();
      });
    
      afterAll(async () => {
        RedisClient.getInstance().disconnect();
      });

    it('should respond with a 404 status code', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(404)
    })
})
