module.exports = (pool) => {
/*
╔╦╗┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
║║║├┤  │ ├─┤│ │ ││└─┐
╩ ╩└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
*/
    let createNewLiqour = (req,callback) => {
        let values = [req.body.name,req.body.type];
        let query = `INSERT INTO liquor (name,type) VALUES ($1,$2) RETURNING *`;
        pool.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null)
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
        let query = 'SELECT * FROM liquor';
        pool.query(query,(err,res)=>{
            if (err) {
                callback(err,null)
            } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };

    let show = (req,callback) => {
        let values = [req.params.id];
        console.log(values)
        let query = 'SELECT liquor.name,liquor.type,users_notes.user_id,users_notes.notes,users_notes.username FROM liquor LEFT JOIN ( SELECT * FROM users INNER JOIN notes ON users.id=notes.user_id ) AS users_notes ON liquor.id=users_notes.liquor_id WHERE liquor.id=$1';
        pool.query(query,values,(err,res)=>{
            if (err) {
                callback(err,null)
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
        create: createNewLiqour,
        index,
        show
    };
};