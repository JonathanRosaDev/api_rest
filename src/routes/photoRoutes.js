import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired.js';

import photoController from '../controllers/PhotoController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Photos
 *   description: Upload de fotos dos alunos
 */

/**
 * @swagger
 * /photos:
 *   post:
 *     summary: Adiciona uma foto a um aluno (requer autenticação)
 *     description: "Use o token do usuário demo para testar (login em /tokens com demo@teste.com / 123456). Um aluno pode ter várias fotos."
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - photo
 *               - aluno_id
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *               aluno_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Foto cadastrada com sucesso
 *       400:
 *         description: Erro no upload ou aluno não existe
 *       401:
 *         description: Não autorizado
 */
router.post('/',loginRequired, photoController.store);

export default router;
