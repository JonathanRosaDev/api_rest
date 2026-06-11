import { Router } from 'express';
import tokenController from '../controllers/TokenControler.js';

const router = Router();

router.post('/', tokenController.store);

export default router;
