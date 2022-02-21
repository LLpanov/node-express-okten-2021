const users = require('../db/users');

function signMiddleware({body}, res, next) {
    try {
        const checkValue = users.find(user => user.email === body.email && user.password.toString() === body.password);
        if (!checkValue) {
            throw new Error('Такого Користовича не існує або він був видалений...');
        }
        next();
    } catch ({message}) {
        res.redirect(`/error?error=${message}`);

    }

}

module.exports = signMiddleware;