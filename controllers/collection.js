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
                res.redirect(`/collection/index`);
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
                let data = {req,result};
                if (req.cookies.userId == result[0].user_id) {
                    res.render('collection/show',data);
                } else {
                    res.render('error',data);
                };
            });
        };
    };

    let updateControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.collection.update(req,(err,result)=>{
                res.redirect(`/collection/index`);
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
        update: updateControllerCallback,
        delete: deleteControllerCallback
    };
};