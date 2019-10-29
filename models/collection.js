module.exports = (pool) => {
/*
╔╦╗┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
║║║├┤  │ ├─┤│ │ ││└─┐
╩ ╩└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
*/
    let create = (req,callback) => {
        let values = [req.body.user_id,req.body.liquor_id,req.body.date_bought,req.body.balance];
        let query = `INSERT INTO collection (user_id,liquor_id,date_bought,balance) VALUES ($1,$2,$3,$4) RETURNING *`;
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

    let selectAll = (req,callback) => {
        let checkForQuery = req.query.col===undefined ? "" : " ORDER BY "+req.query.col+" "+req.query.order;
        let query = "SELECT collection.id,collection.user_id,collection.liquor_id,collection.date_bought,collection.balance,liquor.name,liquor.type FROM collection INNER JOIN liquor ON collection.liquor_id = liquor.id WHERE collection.user_id="+req.cookies.userId+checkForQuery;
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
        let query = 'SELECT collection.id,collection.user_id,collection.liquor_id,collection.date_bought,collection.balance,liquor.name,liquor.type FROM collection INNER JOIN liquor ON collection.liquor_id = liquor.id WHERE collection.id=$1';
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

    let update = (req,callback) => {
        let values = [req.body.balance,req.body.date_bought,req.params.id];
        let query = 'UPDATE collection SET balance=$1,date_bought=$2 WHERE id=$3 RETURNING *';
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

    let deleteEntry = (req,callback) => {
        let values = [req.params.id];
        let query = 'DELETE FROM collection WHERE id=$1';
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
        create,
        selectAll,
        show,
        update,
        deleteEntry
    };
};