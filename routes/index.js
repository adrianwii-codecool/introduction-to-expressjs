const express = require('express');
const router = express.Router();

// router.get('/', function(req, res) {
//     res.send("test");
// })

let index = require('../controllers/index');
const Article = require('../models/article');

router.get('/', index.index)

router.get('/planets', function(req, res) {
    res.render('planets')
})

router.get('/add-article', function(req, res) {
    const article = new Article({
        title: "Sample article",
        author: "Adrian W",
        description: "This is our sample article"
    })
    article.save().then(result => {
        res.send(result)
    }).catch((err) => console.error(err))
})

module.exports = router;