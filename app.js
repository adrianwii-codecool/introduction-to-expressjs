const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const routes = require('./routes/routing');
// TODO provide your own database connection string, you can read it from .env
const dbURI = '';
const mongoose = require('mongoose');

app.engine('hbs', expbs({
    defaultLayout: 'base'
}));
app.set('view engine', 'hbs');


app.use('/', routes);
app.use(express.json());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(8082, () => {
            console.log("Server started");
        });
    })
    .catch(error => console.error(error));