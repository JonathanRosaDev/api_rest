import { Router } from 'express';
import userController from '../controllers/UserController.js';

import loginRequired from '../middlewares/loginRequired.js';

const router = Router();

//Não precisa existir
router.get('/:id', userController.show); //Mostra um usuário
router.get('/', userController.index); //Lista todos usuários

router.post('/',loginRequired, userController.store);
router.put('/',loginRequired, userController.update);
router.delete('/',loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
