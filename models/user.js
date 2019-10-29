const sha256 = require('js-sha256');
const SALT = 'jigger';

module.exports = (pool) => {
/*
╔╦╗┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
║║║├┤  │ ├─┤│ │ ││└─┐
╩ ╩└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
*/
    let create = (req,callback) => {
        let values = [req.body.username,sha256(req.body.password+SALT)];
        let query = "INSERT INTO users (username,password) VALUES ($1,$2) RETURNING *";
        pool.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let verify = (req,callback) => {
        let values = [req.body.username,sha256(req.body.password+SALT)];
        let query = `SELECT * FROM users WHERE username=$1 AND password=$2`;
        pool.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let index = (req,callback) => {
        let query = 'SELECT users.username,notes_count.user_id,notes_count.count AS notes_count,collection_count.count AS collection_count FROM users LEFT JOIN ( SELECT user_id, COUNT(*) FROM notes GROUP BY user_id ) AS notes_count ON users.id = notes_count.user_id LEFT JOIN ( SELECT user_id, COUNT(*) FROM collection GROUP BY user_id ) AS collection_count ON users.id = collection_count.user_id';
        pool.query(query,(err,res)=>{
            if (err) {
                callback(err,null);
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        create,
        verify,
        index
    };
};