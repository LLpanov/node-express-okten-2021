const users = require('../db/users');

class signController {
    getSign(req, res) {
        res.render('single');
    }

    postSign({body, res}) {
        const checkValue = users.find(user => user.email === body.email && user.password.toString() === body.password);
        res.redirect(`/users/${checkValue.id.toString()}`);
    }
}

module.exports = new signController();