import { Router } from 'express';
import userController from '../controllers/UserController.js';

import loginRequired from '../middlewares/loginRequired.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Mostra um usuário específico
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:id', userController.show); //Mostra um usuário

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
router.get('/', userController.index); //Lista todos usuários

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário (requer autenticação)
 *     description: "Use o token do usuário demo para testar (login em /tokens com demo@teste.com / 123456)"
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - password
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.post('/',loginRequired, userController.store);

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Edita o usuário autenticado (só pode editar a si mesmo)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: novaSenha123
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.put('/',loginRequired, userController.update);

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Deleta o usuário autenticado (só pode deletar a si mesmo)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.delete('/',loginRequired, userController.delete);

export default router;
