const knex = require('./database');

knex.select('*').from('users')
    .then((users) => {
        console.log(users);
        process.exit();
    });