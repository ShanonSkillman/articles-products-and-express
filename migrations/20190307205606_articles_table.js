
exports.up = function (knex, Promise) {
    return knex.schema.createTable('articles', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.string('desc').notNullable();
    })
    //promise// .then(() => )
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('articles');
};
