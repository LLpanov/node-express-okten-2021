const {Router} = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/loginMiddelware');
const emailMiddleware = require('../middleware/emailMiddleware');

const loginRouter = Router();

loginRouter.get('/', loginController.getForm);

loginRouter.post('/', loginMiddleware, emailMiddleware, loginController.checkForm);

module.exports = loginRouter;