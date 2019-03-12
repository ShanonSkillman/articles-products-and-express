
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        { id: 1, title: 'exTitle', author: 'exAuthor', desc: 'exDesc' },
        { id: 2, title: 'exTitle', author: 'exAuthor', desc: 'exDesc' },
        { id: 3, title: 'exTitle', author: 'exAuthor', desc: 'exDesc' }
      ]);
    });
};
