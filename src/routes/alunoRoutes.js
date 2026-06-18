import { Router } from 'express';
import alunoController from '../controllers/AlunoController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Gerenciamento de alunos
 */

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Mostra um aluno específico
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *       404:
 *         description: Aluno não encontrado
 */
router.get('/:id', alunoController.show);

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 */
router.get('/', alunoController.index);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno (requer autenticação)
 *     description: "Use o token do usuário demo para testar (login em /tokens com demo@teste.com / 123456)"
 *     tags: [Alunos]
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
 *               - sobrenome
 *               - email
 *               - idade
 *               - peso
 *               - altura
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Maria
 *               sobrenome:
 *                 type: string
 *                 example: Souza
 *               email:
 *                 type: string
 *                 example: maria@email.com
 *               idade:
 *                 type: integer
 *                 example: 20
 *               peso:
 *                 type: number
 *                 example: 65.5
 *               altura:
 *                 type: number
 *                 example: 1.70
 *     responses:
 *       200:
 *         description: Aluno criado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.post('/',loginRequired, alunoController.store);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Edita um aluno (requer autenticação)
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Maria
 *               sobrenome:
 *                 type: string
 *                 example: Souza
 *               email:
 *                 type: string
 *                 example: maria@email.com
 *               idade:
 *                 type: integer
 *                 example: 21
 *               peso:
 *                 type: number
 *                 example: 66.0
 *               altura:
 *                 type: number
 *                 example: 1.70
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Aluno não encontrado
 */
router.put('/:id',loginRequired, alunoController.update);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Deleta um aluno (requer autenticação)
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno deletado com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Aluno não encontrado
 */
router.delete('/:id',loginRequired, alunoController.delete);

export default router;
