module.exports = (db) => {
/*
╔═╗┌─┐┬  ┬  ┌┐ ┌─┐┌─┐┬┌─┌─┐
║  ├─┤│  │  ├┴┐├─┤│  ├┴┐└─┐
╚═╝┴ ┴┴─┘┴─┘└─┘┴ ┴└─┘┴ ┴└─┘
*/
    let newControllerCallback = (req,res) => {
        res.render('liquor/new');
    };

    let createControllerCallback = (req,res) => {
        console.log(req)
        db.liquor.create(req,(err,result)=>{
            res.send(result);
        });
    };

    let indexControllerCallback = (req,res) => {
        db.liquor.index(req,(err,result)=>{
            res.send(result);
        });
    };

    let showAll = (req,res) => {
        db.liquor.index(req,(err,result)=>{
            let data = {req,result};
            res.render('liquor/index',data);
        });
    };

    let showControllerCallback = (req,res) => {
        db.liquor.show(req,(err,result)=>{
            let data = {req,result};
            console.log(result);
            res.render('liquor/show',data);
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
        showAll,
        show: showControllerCallback
    };
};