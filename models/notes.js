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

    let selectIndividualNoteFromCollectionPage = (values,callback) => {
        let query = `SELECT * FROM notes WHERE user_id=$1 AND liquor_id=$2`;
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

    let edit = (req,callback) => {
        let values = [req.body.notes,req.body.user_id,req.body.liquor_id]
        let query = `UPDATE notes SET notes=$1 WHERE user_id=$2 AND liquor_id=$3 RETURNING *`;
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
        select: selectIndividualNoteFromCollectionPage,
        edit
    };
};