import { Router } from 'express';
import { createJefe, deleteJefeById, getAllJefe, getJefeById, updateJefe } from '../controllers/jefe.controller';
import { masterGuard } from '../middewares/login.guard';

const router = Router();

/**
 * @swagger
 * /api/jefes:
 *   get:
 *     tags:
 *       - Jefes
 *     summary: Obtener todos los jefes
 *     security:
 *       - ADMIN: []
 *     responses:
 *       200:
 *         description: Lista de jefes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Jefe'
 */
router.get('/jefes',masterGuard, getAllJefe);
/**
 * @swagger
 * /api/jefe/{id}:
 *   get:
 *     tags:
 *       - Jefes
 *     summary: Obtener jefe por ID
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del jefe
 *     responses:
 *       200:
 *         description: Jefe encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Jefe'
 *       404:
 *         description: Jefe no encontrado
 */
router.get('/jefe/:id',masterGuard, getJefeById);
/**
 * @swagger
 * /api/jefe:
 *   post:
 *     tags:
 *       - Jefes
 *     summary: Crear nuevo jefe
 *     security:
 *       - ADMIN: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Jefe'
 *     responses:
 *       204:
 *         description: Jefe creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/jefe',masterGuard, createJefe);
/**
 * @swagger
 * /api/jefe/{id}:
 *   put:
 *     tags:
 *       - Jefes
 *     summary: Actualizar jefe
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del jefe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Jefe'
 *     responses:
 *       204:
 *         description: Jefe actualizado
 *       404:
 *         description: Jefe no encontrado
 */
router.put('/jefe/:id',masterGuard, updateJefe);
/**
 * @swagger
 * /api/jefe/{id}:
 *   delete:
 *     tags:
 *       - Jefes
 *     summary: Eliminar jefe
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del jefe
 *     responses:
 *       204:
 *         description: Jefe eliminado
 *       404:
 *         description: Jefe no encontrado
 */
router.delete('/jefe/:id',masterGuard, deleteJefeById);

export default router;