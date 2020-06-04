import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsControllers = new PointsController();
const itemsController = new ItemsController();

routes.post('/points' , pointsControllers.create);
routes.post('/points/:id' , pointsControllers.show);
routes.get('/items' , itemsController.index);

export default routes;