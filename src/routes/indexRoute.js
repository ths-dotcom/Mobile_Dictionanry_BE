const DonateRoute = require('./donate');

function route(app) {
    app.use('/donate', DonateRoute);
}

module.exports = route;
