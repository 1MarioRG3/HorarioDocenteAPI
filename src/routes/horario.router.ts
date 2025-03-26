import { Router } from 'express';
import { createHorario, deleteHorarioById, getAllHorario, getHorarioById, updateHorario } from '../controllers/horario.controller';
import { bossGuard } from '../middewares/login.guard';

const router = Router();

/**
 * @swagger
 * /api/horarios:
 *   get:
 *     tags:
 *       - Horarios
 *     summary: Obtener todos los horarios
 *     responses:
 *       200:
 *         description: Lista de horarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Horario'
 */
router.get('/horarios', getAllHorario);
/**
 * @swagger
 * /api/horario/{id}:
 *   get:
 *     tags:
 *       - Horarios
 *     summary: Obtener horario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del horario
 *     responses:
 *       200:
 *         description: Horario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Horario'
 *       404:
 *         description: Horario no encontrado
 */
router.get('/horario/:id', getHorarioById);
/**
 * @swagger
 * /api/horario:
 *   post:
 *     tags:
 *       - Horarios
 *     summary: Crear nuevo horario
 *     security:
 *       - JEFE: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Horario'
 *     responses:
 *       204:
 *         description: Horario creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/horario',bossGuard,createHorario);
/**
 * @swagger
 * /api/horario/{id}:
 *   put:
 *     tags:
 *       - Horarios
 *     summary: Actualizar horario
 *     security:
 *       - JEFE: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del horario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Horario'
 *     responses:
 *       204:
 *         description: Horario actualizado
 *       404:
 *         description: Horario no encontrado
 */
router.put('/horario/:id',bossGuard,updateHorario);
/**
 * @swagger
 * /api/horario/{id}:
 *   delete:
 *     tags:
 *       - Horarios
 *     summary: Eliminar horario
 *     security:
 *       - JEFE: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del horario
 *     responses:
 *       204:
 *         description: Horario eliminado
 *       404:
 *         description: Horario no encontrado
 */
router.delete('/horario/:id',bossGuard,deleteHorarioById);

export default router;