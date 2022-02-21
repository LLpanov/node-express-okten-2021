const {Router} = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signRouter');
const errorRouter = require('./errorRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/singIn', signInRouter);
routes.use('/error', errorRouter);

routes.use((req, res) => {
    res.render('NotFound');
});

module.exports = routes;
