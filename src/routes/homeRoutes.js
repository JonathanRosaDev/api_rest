import { Router } from 'express';
import homeController from '../controllers/HomeController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Rota inicial da API
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota inicial - verifica se a API está rodando
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: API funcionando corretamente
 */
router.get('/', homeController.index);

export default router;
