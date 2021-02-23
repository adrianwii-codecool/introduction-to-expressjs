const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.login = function(req, res, next) {

    // const email = req.body.email;
    console.log(req.body);
    // const password = req.body.password;
    // const email = "adrian.widlak@codecool.com";
    // const email = "krzysztof.krawczyk@motorolasolutions.com";

    // check in database if given user exist
    /* User.find({email: email, password: password}).exec().then(function(response){
        // in response we received user object with all the fields
    })
    */

    // good practice: payload usally inlcudes email and user role
    const user = { email: email }

    // GENERATE JWT TOKEN
    const accessToken = generateAccessToken(user);
    res.json({ accessToken: accessToken });
}

function generateAccessToken(user) {
    console.log(process.env.TOKEN_SECRET);
    return jwt.sign(user, process.env.TOKEN_SECRET);
}