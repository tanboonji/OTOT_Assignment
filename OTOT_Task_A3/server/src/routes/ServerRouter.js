import { Router } from 'express';
import * as serverController from '../controllers/ServerController.js';

const router = Router();

router.get('/get', serverController.getMethod);
router.post('/post', serverController.postMethod);
router.delete('/delete', serverController.deleteMethod);
router.put('/put', serverController.putMethod);

export default router;
