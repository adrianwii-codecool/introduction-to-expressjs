const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

exports.login = async function(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;

    // check in database if given user exist
    let user = await User.findOne({ email: email });
    if (user === null) return res.sendStatus(401);

    // TODO: compare passwords
    // good practice: payload usally inlcudes email and user role
    const payload = { email: email };

    // GENERATE JWT TOKEN
    const accessToken = generateAccessToken(payload);
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
    await User.updateOne({ _id: user._id }, { refreshToken: refreshToken });

    res.json({ accessToken: accessToken, refreshToken: refreshToken });
}

exports.refresh = function(req, res) {
    const refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401)

    // TODO: check in databse, if given refresh token exist, if not return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ email: user.email })
        res.json({ accessToken: accessToken })
    })
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '60s' });
}