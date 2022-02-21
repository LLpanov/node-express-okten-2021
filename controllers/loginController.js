const users = require('../db/users');

class loginController {
    getForm(req, res) {
        res.render('login');
    }

    checkForm({body}, res) {
        users.push({id: new Date().getTime(), ...body});
        res.redirect('/users');

    }

}

module.exports = new loginController();