module.exports = (app, allModels) => {
/*
╔═╗┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌   ┬   ┌─┐┌─┐┌┬┐  ┬ ┬┌─┐
║  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││  ┌┼─  └─┐├┤  │   │ │├─┘
╚═╝└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘  └┘   └─┘└─┘ ┴   └─┘┴
*/
/*
╦  ┬┌─┐ ┬ ┬┌─┐┬─┐
║  ││─┼┐│ ││ │├┬┘
╩═╝┴└─┘└└─┘└─┘┴└─
*/
// require liquor controller
    const liquorControl = require('./controllers/liquor')(allModels);
// get form for new liquor
    app.get('/liquor/new',liquorControl.new);
// post contents from form to db
    app.post('/liquor/new',liquorControl.create);
// get list of all liquor available
    app.get('/liquor/index',liquorControl.index);
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
// get edit form
    app.get('/collection/:id/edit',collectionControl.edit);
// update the selected item
    app.post('/collection/:id',collectionControl.update);
// read an entry in collection
    app.get('/collection/:id',collectionControl.show);
};