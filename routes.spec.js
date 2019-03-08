const request = require('supertest');
const server = require('./server.js');
const db = require('./data/dataConfig.js')
describe('server.js', () => {
    afterAll(async ()=>{
        await db('games').truncate();
    });
describe('GET /', () => {
        it('should return 200 ok', async() => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
    });
})
describe('GET / Games', () => {
        it('should return 200 ok, should be an array', async() => {
            const res = await request(server).get('/games')
            expect(res.status).toBe(200)
            expect(res.body).toEqual([]);
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
describe('POST / Games', () => {
    it('it should return 201 on submitting a game', async() => {
        const res = await request(server).post('/games').send({title:"Zelda", genre: "nintendo"})
        expect(res.status).toBe(201)
    });
    it('it should return 422 if missing a title or genre', async() => {
        const res = await request(server).post('/games').send({genre: "nintendo", releaseYear: 2000})
        expect(res.status).toBe(422)
    });
});
})