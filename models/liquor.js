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
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        create: createNewLiqour,
        index
    };
};