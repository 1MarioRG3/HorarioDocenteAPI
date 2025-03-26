import { Router } from 'express';
import { createTurno, deleteTurnoById, getAllTurno, getTurnoById, updateTurno } from '../controllers/turno.controller';
import { bossGuard } from '../middewares/login.guard';

const router = Router();

/**
 * @swagger
 * /api/turnos:
 *   get:
 *     tags:
 *       - Turnos
 *     summary: Obtener todos los turnos
 *     responses:
 *       200:
 *         description: Lista de turnos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Turno'
 */
router.get('/turnos', getAllTurno);

/**
 * @swagger
 * /api/turno/{id}:
 *   get:
 *     tags:
 *       - Turnos
 *     summary: Obtener turno por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del turno
 *     responses:
 *       200:
 *         description: Turno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Turno'
 *       404:
 *         description: Turno no encontrado
 */
router.get('/turno/:id', getTurnoById);

/**
 * @swagger
 * /api/turno:
 *   post:
 *     tags:
 *       - Turnos
 *     summary: Crear nuevo turno
 *     security:
 *       - JEFE: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Turno'
 *     responses:
 *       204:
 *         description: Turno creado
 *       500:
 *         description: Error en el servidor
 */
router.post('/turno', bossGuard, createTurno);

/**
 * @swagger
 * /api/turno/{id}:
 *   put:
 *     tags:
 *       - Turnos
 *     summary: Actualizar turno
 *     security:
 *       - JEFE: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del turno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Turno'
 *     responses:
 *       204:
 *         description: Turno actualizado
 *       404:
 *         description: Turno no encontrado
 */
router.put('/turno/:id', bossGuard, updateTurno);

/**
 * @swagger
 * /api/turno/{id}:
 *   delete:
 *     tags:
 *       - Turnos
 *     summary: Eliminar turno
 *     security:
 *       - JEFE: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del turno
 *     responses:
 *       204:
 *         description: Turno eliminado
 *       404:
 *         description: Turno no encontrado
 */
router.delete('/turno/:id', bossGuard, deleteTurnoById);


export default router;