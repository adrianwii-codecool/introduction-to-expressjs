const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

let indexController = require('../controllers/index.controller');
let articleController = require('../controllers/article.controller');
let securityController = require('../controllers/security.controller');

router.get('/', indexController.index);
router.get('/planets', indexController.planets);
router.get('/add-article', articleController.addArticle);
router.get('/article/:id', articleController.article);
router.get('/articles', authenticateToken, articleController.articles);
router.post('/login', securityController.login);

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next() // pass the execution off to whatever request the client intended
    })
}

module.exports = router;
