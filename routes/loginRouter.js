const {Router} = require('express');
const users = require('../db/users');

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');

});
loginRouter.post('/',({body}, res) => {
    console.log(users, body)
    const checkUser = users.some(user => user.email === body.email);
    if (checkUser) {
        error = 'Такий емейл вже існує...';
        res.redirect('/error');
        return;
    }

    users.push({id: new Date().getTime(), ...body});
    res.redirect('/users');

});

module.exports = loginRouter;