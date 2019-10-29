module.exports = (app, allModels) => {
/*
╔═╗┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌   ┬   ┌─┐┌─┐┌┬┐  ┬ ┬┌─┐
║  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││  ┌┼─  └─┐├┤  │   │ │├─┘
╚═╝└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘  └┘   └─┘└─┘ ┴   └─┘┴
*/
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
/*
╦  ┬┌─┐ ┬ ┬┌─┐┬─┐
║  ││─┼┐│ ││ │├┬┘
╩═╝┴└─┘└└─┘└─┘┴└─
*/
// require liquor controller
    const liquorControl = require('./controllers/liquor')(allModels);
// post contents from form to db
    app.post('/liquor/new',liquorControl.create);
// ajax call list of all liquor available
    app.get('/liquor/index',liquorControl.index);
// get all liquor in page
    app.get('/liquor/all',liquorControl.showAll);
// show a single liquor
    app.get('/liquor/:id',liquorControl.show);
/*
╔═╗┌─┐┬  ┬  ┌─┐┌─┐┌┬┐┬┌─┐┌┐┌
║  │ ││  │  ├┤ │   │ ││ ││││
╚═╝└─┘┴─┘┴─┘└─┘└─┘ ┴ ┴└─┘┘└┘
*/
// require collection controller
    const collectionControl = require('./controllers/collection')(allModels);
// get form for new collection
    app.get('/collection/new',collectionControl.new);
// post contents from form to db
    app.post('/collection/new',collectionControl.create);
// get your collection
    app.get('/collection/index',collectionControl.index);
// update the selected item
    app.patch('/collection/:id',collectionControl.update);
// read an entry in collection
    app.get('/collection/:id',collectionControl.show);
// delete an entry in collection
    app.delete('/collection/:id',collectionControl.delete);
/*
╦ ╦┌─┐┌─┐┬─┐┌─┐
║ ║└─┐├┤ ├┬┘└─┐
╚═╝└─┘└─┘┴└─└─┘
*/
// require user controller
    const userControl = require('./controllers/user')(allModels);
// get form to create new user
    app.get('/register',userControl.new);
// post form to create new user
    app.post('/register',userControl.create);
// login form
    app.get('/login',userControl.login);
// login verification
    app.post('/login',userControl.verify);
// logout
    app.get('/logout',userControl.logout);
// home
    app.get('/',userControl.home);
// show all users
    app.get('/users',userControl.index);
// edit own page
    app.get('/user/:id',userControl.show);
// upload files via multer
    app.post('/user/:id',upload.single('dp'),userControl.update);
/*
╔╗╔┌─┐┌┬┐┌─┐┌─┐
║║║│ │ │ ├┤ └─┐
╝╚╝└─┘ ┴ └─┘└─┘
*/
// require notes controller
    const notesControl = require('./controllers/notes')(allModels);
// post form to creat new notes
    app.post('/notes/addNote',notesControl.addNote);
};