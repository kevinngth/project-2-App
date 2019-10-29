const cloudinary = require('cloudinary');

if (process.env.CLOUDINARY_URL) {
    var configForCloudinary = process.env.CLOUDINARY_URL;
} else {
    configForCloudinary = require("../config.json");
};
cloudinary.config(configForCloudinary);

module.exports = (db) => {
/*
╔═╗┌─┐┬  ┬  ┌┐ ┌─┐┌─┐┬┌─┌─┐
║  ├─┤│  │  ├┴┐├─┤│  ├┴┐└─┐
╚═╝┴ ┴┴─┘┴─┘└─┘┴ ┴└─┘┴ ┴└─┘
*/
    let newControllerCallback = (req,res) => {
        res.render('user/new');
    };

    let createControllerCallback = (req,res) => {
        db.user.create(req,(err,result)=>{
            if (err) {
                res.send(err.detail);
            } else {
                if (result !== null) {
                    res.cookie('username',result[0].username);
                    res.cookie('loggedIn','yes');
                    res.cookie('userId',result[0].id);
                    res.redirect('/collection/index');
                } else {
                    res.render('user/wrongLogin');
                };
            };
        });
    };

    let loginControllerCallback = (req,res) => {
        res.render('user/login');
    };

    let verifyControllerCallback = (req,res) => {
        db.user.verify(req,(err,result)=>{
            if (result !== null) {
                res.cookie('username',result[0].username);
                res.cookie('loggedIn','yes');
                res.cookie('userId',result[0].id);
                res.redirect('/collection/index');
            } else {
                res.render('user/wrongLogin');
            };
        });
    };

    let logoutControllerCallback = (req,res) => {
        res.clearCookie('username');
        res.clearCookie('loggedIn');
        res.clearCookie('userId');
        res.redirect('/login');
    };

    let home = (req,res) => {
        let data = {req};
        res.render('home',data);
    };

    let index = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            db.user.index(req,(err,result)=>{
                let data = {req,result};
                res.render('user/index',data);
            });
        };
    };

    let showControllerCallback = (req,res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            if (req.cookies.userId==req.params.id) {
                db.user.show(req,(err,result)=>{
                    let data = {req,result};
                    res.render('user/edit',data);
                });
            } else {
                res.send('error');
            };
        };
    };

    let update = (req, res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
            cloudinary.uploader.upload(req.file.path,result=>{
                db.user.update(req,result.url,(err,result2)=>{
                    res.redirect(req.headers.referer);
                });
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
        login: loginControllerCallback,
        verify: verifyControllerCallback,
        logout: logoutControllerCallback,
        home,
        index,
        show: showControllerCallback,
        update
    };
};