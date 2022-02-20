const {Router} = require('express');
const users = require('../db/users');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', userController.renderUsers);

userRouter.get('/:id', ({params}, res) => {
    const user = users.find(user => user.id === +params.id);
    if (!user) {
        error = 'Такого Користовича не існує або він був видалений...';
        res.redirect('/error');
        return;

    }
    res.render('user', ({user}));

});

userRouter.post('/:id',({params}, res) => {
    const {id} = params;
    const userDel = users[id - 1]
    // users = users.filter(user => user.id.toString() !== id);
    users.splice(users.indexOf(userDel), 1);

    res.redirect('/users');

});

module.exports = userRouter