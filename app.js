const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const routes = require('./routes/routing');
const mongoose = require('mongoose');

app.use(express.json());
const dbURI = 'mongodb+srv://adrian:adrianMotorola@cluster0.vp5ae.mongodb.net/test?retryWrites=true&w=majority';


app.engine('hbs', expbs({
    defaultLayout: 'base'
}));
app.set('view engine', 'hbs');

// routing
//
// app.get('/', (req, res) => {
// res.render('index', {
//     title: 'motorola-solution',
//     name: {
//         first: "Adrian",
//         second: "Wii"
//     }
// });
// });
// router.get('/people', (req, res) => {
//     res.render('people', { data: axiosTest() })
// });
app.use('/', routes);

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(8080, () => {
            console.log("Server started");
        });
    })
    .catch(error => console.error(error));
