// // Update with your config settings.
// require('dotenv').config();
// console.log(process.env)
// module.exports = {

//   development: {
//     client: 'postgresql',
//     connection: {
//       port: process.env.POSTGRES_HOST_PORT,
//       database: process.env.POSTGRES_DB,
//       user: process.env.POSTGRES_USER,
//       password: process.env.POSTGRES_PASSWORD
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
