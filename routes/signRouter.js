const {Router} = require('express');
const signController = require('../controllers/signController');
const signMiddleware = require('../middleware/signMiddleware');

const signInRouter = Router();

signInRouter.get('/', signController.getSign);

signInRouter.post('/',signMiddleware ,signController.postSign);

module.exports = signInRouter;