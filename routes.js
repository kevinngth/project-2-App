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
// get your collections
    app.get('/collection/index',collectionControl.index);
/*

*/
/*

*/
/*

*/
/*

*/
/*

*/
};