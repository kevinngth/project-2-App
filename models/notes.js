module.exports = (pool) => {
/*
╔╦╗┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
║║║├┤  │ ├─┤│ │ ││└─┐
╩ ╩└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
*/
    let createNewNote = (req,callback) => {
        let values = [req.cookies.userId,req.body.liquor_id,req.body.notes];
        let query = `INSERT INTO notes (user_id,liquor_id,notes) VALUES ($1,$2,$3) RETURNING *`;
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
        create: createNewNote,
    };
};