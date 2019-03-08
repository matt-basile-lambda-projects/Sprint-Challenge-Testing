
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', function(games){
        games.increments();
        games.string('title', 255).notNullable().unique('uq_title');
        games.string('genre', 255).notNullable();
        games.integer('releaseYear')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games')
};
