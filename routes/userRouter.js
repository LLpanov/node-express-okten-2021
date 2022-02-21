const {Router} = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

const userRouter = Router();

userRouter.get('/', userController.renderUsers);

userRouter.get('/:id',userMiddleware ,userController.getUserById);

userRouter.post('/:id',userController.getUserDelete);

module.exports = userRouter