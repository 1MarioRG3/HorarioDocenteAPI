import { Router } from 'express';
import { createDia, deleteDiaById, getAllDia, getDiaById, updateDia } from '../controllers/dia.controller';
import { bossGuard, masterGuard } from '../middewares/login.guard';
const router = Router();

/**
 * @swagger
 * /api/dias:
 *   get:
 *     tags:
 *       - Días
 *     summary: Obtener todos los días
 *     responses:
 *       200:
 *         description: Lista de días
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Dia'
 */
router.get('/dias', getAllDia);
/**
 * @swagger
 * /api/dia/{id}:
 *   get:
 *     tags:
 *       - Días
 *     summary: Obtener día por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del día
 *     responses:
 *       200:
 *         description: Día encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Dia'
 *       404:
 *         description: Día no encontrado
 */
router.get('/dia/:id', getDiaById);
/**
 * @swagger
 * /api/dia:
 *   post:
 *     tags:
 *       - Días
 *     summary: Crear nuevo día
 *     security:
 *       - ADMIN: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             nombre:
 *             type: string
 *             description: Nombre del dia
 *             example: Lunes
 *     responses:
 *       204:
 *         description: Día creado
 *       500:
 *         description: Error en el servidor
 */
router.post('/dia', masterGuard, createDia);
/**
 * @swagger
 * /api/dia/{id}:
 *   put:
 *     tags:
 *       - Días
 *     summary: Actualizar día
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del día
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             nombre:
 *             type: string
 *             description: Nombre del dia
 *             example: Lunes
 *     responses:
 *       200:
 *         description: Día actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Dia'
 *       404:
 *         description: Día no encontrado
 */
router.put('/dia/:id', masterGuard, updateDia);
/**
 * @swagger
 * /api/dia/{id}:
 *   delete:
 *     tags:
 *       - Días
 *     summary: Eliminar día
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del día
 *     responses:
 *       204:
 *         description: Día eliminado
 *       404:
 *         description: Día no encontrado
 */
router.delete('/dia/:id', masterGuard, deleteDiaById);

export default router;