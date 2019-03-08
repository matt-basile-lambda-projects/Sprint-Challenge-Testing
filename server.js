const express = require('express');
const Games = require('./game-model')
const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

server.get('/games', (req, res) => {
    Games.find()
    .then(games =>{
        res.status(200).json(games);
    })
    .catch(err => res.send(err));
});
// server.post('/games', (req, res) => {
//     let game =req.body
//     Games.add(game)
//     .then( game => {
//         res.status(201).json(game)
//     })
//     .catch(error =>{
//         res.status(500).json(error)
//     })
// });
module.exports=server