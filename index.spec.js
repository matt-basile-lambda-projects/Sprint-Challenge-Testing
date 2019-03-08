const db = require('./data/dataConfig.js')
const Games = require('./game-model.js')

describe('API TESTING', () => {
    afterAll(async ()=>{
        await db('games').truncate();
       });
    it('post method', async() => {
        const game = await Games.add({title: 'Battleship', genre: "Arcade", releaseYear: 1969})
            
        expect(game.title).toBe('Battleship')
        });
    });
