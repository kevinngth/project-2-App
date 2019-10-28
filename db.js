/*
╔═╗┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌   ┬   ┌─┐┌─┐┌┬┐  ┬ ┬┌─┐
║  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││  ┌┼─  └─┐├┤  │   │ │├─┘
╚═╝└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘  └┘   └─┘└─┘ ┴   └─┘┴
*/
const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };

}else{
    configs = {
        user: 'kevin',
        host: '127.0.0.1',
        database: 'jyggr',
        port: 5432
    };
};


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});
/*
╦═╗┌─┐┌─┐ ┬ ┬┬┬─┐┌─┐  ╔╦╗┌─┐┌┬┐┌─┐┬  ┌─┐
╠╦╝├┤ │─┼┐│ ││├┬┘├┤   ║║║│ │ ││├┤ │  └─┐
╩╚═└─┘└─┘└└─┘┴┴└─└─┘  ╩ ╩└─┘─┴┘└─┘┴─┘└─┘
*/
const liquorModels = require('./models/liquor');
const liquorObject = liquorModels(pool);

const collectionModels = require('./models/collection');
const collectionObject = collectionModels(pool);

const userModels = require('./models/user');
const userObject = userModels(pool);

const notesModels = require('./models/notes');
const notesObject = notesModels(pool);
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
module.exports = {
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
    pool,
    liquor: liquorObject,
    collection: collectionObject,
    user: userObject,
    notes: notesObject
};