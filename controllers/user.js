const cloudinary = require('cloudinary');
console.log('im at controllers/user.js line 2',process.env.CLOUDINARY_URL);
if (process.env.CLOUDINARY_URL) {
    var configForCloudinary = process.env.CLOUDINARY_URL;
} else {
    var configForCloudinary = require("../config.json");
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
                db.user.show(req,(err,result)=>{
                    let data = {req,result};
                    res.render('user/show',data);
                });
            };
        };
    };

    let update = (req, res) => {
        if (req.cookies.loggedIn !== 'yes') {
            res.redirect('/login');
        } else {
console.log('im at controllers/user.js line 96, this is configForCloudinary:',configForCloudinary);
            console.log('im at controllers/user.js line 97, this is req.file.path:',req.file.path);
            cloudinary.uploader.upload(req.file.path,result=>{
                console.log('im at controllers/user.js line 98, this is result.url:',result.url);
                db.user.update(req,result.url,(err,result2)=>{
                    console.log('im at controllers/user.js line 100, this is req.headers.referer:',req.headers.referer);
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