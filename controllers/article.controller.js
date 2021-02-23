const Article = require('../models/article');

exports.articles = function(req, res) {
    Article.find({ email: req.user.email })
        .then(result => {
            res.send(result)
        }).catch((err) => console.error(err))
}

exports.article = function(req, res) {
    let id = req.params['id'];
    console.log(id);
    Article.findById(id)
        .then(result => {
            res.send(result)
        }).catch((err) => console.error(err))
}

exports.addArticle = function(req, res) {
    const article = new Article({
        title: "Sample article II",
        author: "Adrian W",
        description: "This is our sample second article"
    })
    article.save().then(result => {
        res.send(result)
    }).catch((err) => console.error(err))
}