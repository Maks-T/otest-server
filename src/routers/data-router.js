const Router = require('express');
const dataController = require('../controllers/data-controller');

const dataRouter = Router();

dataRouter.get('/', dataController.get);
dataRouter.put('/', dataController.update);

module.exports = dataRouter;
