const db = require('./data/dataConfig.js');

module.exports = {
  add,
  remove,
  find,
  findBy,
  findById,
};

function find() {
  return db('games').select('id', 'title', 'genre', 'releaseYear');
}

function findBy(filter) {
  return db('games').where(filter);
}

async function add(game) {
  const [id] = await db('games').insert(game);
  return findById(id);
}
async function remove(id) {
    const count = await db('games').where({id}).del();
    return count    
}

function findById(id) {
  return db('games')
    .where({ id })
    .first();
}