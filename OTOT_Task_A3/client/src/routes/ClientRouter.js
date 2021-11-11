import { Router } from 'express';
import * as clientController from '../controllers/ClientController.js';

const router = Router();

router.get('/airports', clientController.getAirports);
router.get('/borders', clientController.getBorders);
router.get('/cities', clientController.getCities);
router.get('/connections', clientController.getConnections);
router.get('/countries', clientController.getCountries);
router.get('/routes', clientController.getRoutes);
router.get('/users', clientController.getUsers);
router.get('/visited', clientController.getVisited);

export default router;
