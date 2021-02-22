const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const routes = require('./routes/index');
const dbURI = 'mongodb+srv://adrian:adrianMotorola@cluster0.igyhz.mongodb.net/video-library?retryWrites=true&w=majority';
const mongoose = require('mongoose');

app.engine('hbs', expbs({
    defaultLayout: 'base'
}));
app.set('view engine', 'hbs');


app.use('/', routes);

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(8082, () => {
            console.log("Server started");
        });
    })
    .catch(error => console.error(error));