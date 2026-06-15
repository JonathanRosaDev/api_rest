import { Router } from 'express';
import alunoController from '../controllers/AlunoController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = Router();

router.get('/:id', alunoController.show);
router.get('/', alunoController.index);
router.post('/',loginRequired, alunoController.store);
router.put('/:id',loginRequired, alunoController.update);
router.delete('/:id',loginRequired, alunoController.delete);

export default router;
