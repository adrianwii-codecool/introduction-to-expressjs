const express = require('express');
const router = express.Router();

// router.get('/', function(req, res) {
//     res.send("test");
// })

let index = require('../controllers/index');

router.get('/', index.index)

router.get('/planets', function(req, res) {
    // fetch data from SWAPI
    res.render('planets')
})

module.exports = router;