const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('should return 200 ok', async() => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
    });
})
    describe('GET / GAMES', () => {
        it('should return 200 ok', async() => {
            const res = await request(server).get('/games')
            expect(res.status).toBe(200)
    });
        it('should return JSON', async() => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
    });
    it('should return no users', async() => {
        const res = await request(server).get('/games')
        expect(res.body).toEqual([])
});
})
})