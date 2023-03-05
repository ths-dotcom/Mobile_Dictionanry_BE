const WordsRoute = require('./word');

function route(app) {
    app.use('/words', WordsRoute);
    app.use('/', (req, res, next) => {
        res.json("abc ....");
    });
}

module.exports = route;
