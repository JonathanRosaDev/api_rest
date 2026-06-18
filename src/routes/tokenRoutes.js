import { Router } from 'express';
import tokenController from '../controllers/TokenControler.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tokens
 *   description: Autenticação de usuários
 */

/**
 * @swagger
 * /tokens:
 *   post:
 *     summary: Realiza login e gera um token de autenticação
 *     description: "Use as credenciais de demonstração: email **demo@teste.com**, senha **123456**"
 *     tags: [Tokens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: demo@teste.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/', tokenController.store);
export default router;
