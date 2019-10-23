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

    // let selectAll = (req,callback) => {
    //     let query = 'SELECT * FROM collection';
    //     pool.query(query,(err,res)=>{
    //         if (err) {
    //             callback(err,null)
    //         } else {
    //             if (res.rows.length>0) {
    //                 callback(null,res.rows);
    //             } else {
    //                 callback(null,null);
    //             };
    //         };
    //     });
    // };

    // let show = (req,callback) => {
    //     let values = [req.params.id];
    //     let query = 'SELECT * FROM collection WHERE id=$1';
    //     pool.query(query,values,(err,res)=>{
    //         if (err) {
    //             callback(err,null)
    //         } else {
    //             if (res.rows.length>0) {
    //                 callback(null,res.rows);
    //             } else {
    //                 callback(null,null);
    //             };
    //         };
    //     });
    // };

    // let update = (req,callback) => {
    //     let values = [req.body.balance,req.params.id];
    //     let query = 'UPDATE collection SET balance=$1 WHERE id=$2 RETURNING *';
    //     pool.query(query,values,(err,res)=>{
    //         if (err) {
    //             callback(err,null)
    //         } else {
    //             if (res.rows.length>0) {
    //                 callback(null,res.rows);
    //             } else {
    //                 callback(null,null);
    //             };
    //         };
    //     });
    // };

    // let deleteEntry = (req,callback) => {
    //     console.log(req.params.id)
    //     let values = [req.params.id];
    //     let query = 'DELETE FROM collection WHERE id=$1';
    //     pool.query(query,values,(err,res)=>{
    //         if (err) {
    //             callback(err,null)
    //         } else {
    //             if (res.rows.length>0) {
    //                 callback(null,res.rows);
    //             } else {
    //                 callback(null,null);
    //             };
    //         };
    //     });
    // };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        create,
        // selectAll,
        // show,
        // update,
        // deleteEntry
    };
};