const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const routes = require('./routes/index');

app.engine('hbs', expbs({
    defaultLayout: 'base'
}));
app.set('view engine', 'hbs');

app.use('/', routes);

app.listen(8080, () => {
    console.log("Server started at localhost:8080");
})