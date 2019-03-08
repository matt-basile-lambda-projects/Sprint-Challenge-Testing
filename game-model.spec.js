const db = require('./data/dataConfig.js')
const Games = require('./game-model.js')

describe('API TESTING', () => {
    afterAll(async ()=>{
        await db('games').truncate();
       });
    describe('ADD() /POST', () => {
        it('Adding one Game full Content', async() => {
            const game = await Games.add({title: 'Battleship', genre: "Arcade", releaseYear: 1969});
            expect(game.title).toBe('Battleship')
        });
        it('Adding a Game with No Year', async() => {
            const game = await Games.add({title: 'Wanda', genre: "Arcade",})
            expect(game.title).toBe('Wanda')
        });
        it('Adding a Multiple Games', async() => {
            await Games.add({title: 'Tetris', genre: "Arcade", releaseYear: 1979})
            await Games.add({title: 'Donkey Kong', genre: "Arcade", releaseYear: 1977})
            const games = await db('games')
            expect(games).toHaveLength(4)
        });
        
    });
   
});
