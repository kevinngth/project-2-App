module.exports = (db) => {
/*
╔═╗┌─┐┬  ┬  ┌┐ ┌─┐┌─┐┬┌─┌─┐
║  ├─┤│  │  ├┴┐├─┤│  ├┴┐└─┐
╚═╝┴ ┴┴─┘┴─┘└─┘┴ ┴└─┘┴ ┴└─┘
*/
    let addNoteControllerCallback = (req,res) => {
// check if note exist
        let values = [req.body.user_id,req.body.liquor_id];
        db.notes.select(values,(err,result)=>{
// if it doesn't exist, create
            if (result==null) {
                db.notes.create(req,(err,result)=>{
                    res.redirect(req.headers.referer);
                });
            } else {
// if it exists, edit
                db.notes.edit(req,(err,result)=>{
                    res.redirect(req.headers.referer);
                });
            };
        });

    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        addNote: addNoteControllerCallback
    };
};