const users = require('../db/users');

function emailMiddleware({body}, res, next) {
    try {
        const checkUser = users.some(user => user.email === body.email);
        if (checkUser) {
            throw new Error('Такий емейл вже існує...');

        }
        next();
    }catch ({message}) {
        res.redirect(`/error?error=${message}`);
    }
}

module.exports = emailMiddleware;