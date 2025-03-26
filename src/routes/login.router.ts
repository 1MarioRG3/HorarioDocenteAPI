import { Router } from 'express';
import { login, masterLogin } from '../controllers/login.controller';

const router = Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Autenticación
 *     summary: Iniciar sesión (Jefe de año)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 description: Nombre de usuario
 *                 example: "jefe"
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: "password123"
 *             required:
 *               - usuario
 *               - password
 *     responses:
 *       200:
 *         description: Sesión iniciada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de acceso
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Error al autenticarse
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje con el error
 *                   example: "Error al autenticarse"
 */
router.post('/login', login);
/**
 * @swagger
 * /api/login/master:
 *   post:
 *     tags:
 *       - Autenticación
 *     summary: Iniciar sesión (acceso master)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: Contraseña master
 *                 example: "password_master"
 *             required:
 *               - password
 *     responses:
 *       200:
 *         description: Sesión master iniciada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de acceso master
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Error al autenticarse
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje con el error
 *                   example: "Error al autenticarse"
 */
router.post('/login/master',masterLogin);

export default router;