module.exports = (db) => {
/*
╔═╗┌─┐┬  ┬  ┌┐ ┌─┐┌─┐┬┌─┌─┐
║  ├─┤│  │  ├┴┐├─┤│  ├┴┐└─┐
╚═╝┴ ┴┴─┘┴─┘└─┘┴ ┴└─┘┴ ┴└─┘
*/
    let newControllerCallback = (req,res) => {
        res.render('collection/new');
    };

    let createControllerCallback = (req,res) => {
        db.collection.create(req,(err,result)=>{
            res.render('collection/show',result);
        });
    };

    let indexControllerCallback = (req,res) => {
        db.collection.selectAll(req,(err,result)=>{
            res.render('collection/index',{result});
        });
    };

    let showControllerCallback = (req,res) => {
        db.collection.show(req,(err,result)=>{
        console.log('ALPHA');
            res.render('collection/show',result);
        });
    };

    let editControllerCallback = (req,res) => {
        db.collection.show(req,(err,result)=>{
        console.log('BRAVO');
            res.render('collection/edit',result);
        });
    };

    let updateControllerCallback = (req,res) => {
        db.collection.update(req,(err,result)=>{
            res.render('collection/show',result);
        });
    };
/*
╔═╗─┐ ┬┌─┐┌─┐┬─┐┌┬┐
║╣ ┌┴┬┘├─┘│ │├┬┘ │
╚═╝┴ └─┴  └─┘┴└─ ┴
*/
    return {
        new: newControllerCallback,
        create: createControllerCallback,
        index: indexControllerCallback,
        show: showControllerCallback,
        edit: editControllerCallback,
        update: updateControllerCallback
    };
};