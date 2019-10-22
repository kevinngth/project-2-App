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
    app.post('/liquor/new',liquorControl.create);
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
/*

*/
};