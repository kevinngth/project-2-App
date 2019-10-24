module.exports = (db) => {
/*
╔═╗┌─┐┬  ┬  ┌┐ ┌─┐┌─┐┬┌─┌─┐
║  ├─┤│  │  ├┴┐├─┤│  ├┴┐└─┐
╚═╝┴ ┴┴─┘┴─┘└─┘┴ ┴└─┘┴ ┴└─┘
*/
    let newControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            let data = {req};
            res.render('collection/new',data);
        };
    };

    let createControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.create(req,(err,result)=>{
                let data = {req,result};
                res.render('collection/show',data);
            });
        };
    };

    let indexControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.selectAll(req,(err,result)=>{
                let data = {req,result};
                res.render('collection/index',data);
            });
        };
    };

    let showControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.show(req,(err,result)=>{
                res.render('collection/show',result);
            });
        };
    };

    let editControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.show(req,(err,result)=>{
                res.render('collection/edit',result);
            });
        };
    };

    let updateControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.update(req,(err,result)=>{
                res.render('collection/show',result);
            });
        };
    };

    let deleteControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.deleteEntry(req,(err,result)=>{
                res.redirect('/collection/index');
            });
        };
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
        update: updateControllerCallback,
        delete: deleteControllerCallback
    };
};