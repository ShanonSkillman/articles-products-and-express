
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        { title: 'exTitle', author: 'exAuthor', body: 'exBody' },
        { title: 'exTitle', author: 'exAuthor', body: 'exBody' },
        { title: 'exTitle', author: 'exAuthor', body: 'exBody' }
      ]);
    });
};
