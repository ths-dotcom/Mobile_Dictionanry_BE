const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/indexRoute');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./app/models/connection');

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(cookieParser());
app.use(cors('*'));

// db.connect();

route(app);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})