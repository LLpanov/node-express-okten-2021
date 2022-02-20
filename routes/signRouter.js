const {Router} = require('express');
const users = require('../db/users');

const signInRouter = Router();

signInRouter.get('/', (req, res) => {
    res.render('single');
});

signInRouter.post('/', ({body}, res) => {
    const checkValue = users.find(user => user.email === body.email && user.password.toString() === body.password);
    if (checkValue) {
        res.redirect(`/users/${checkValue.id.toString()}`);
    } else {
        res.redirect('/error');
        error = 'Такого Користовича не існує або він був видалений...';
    }

});

module.exports = signInRouter;