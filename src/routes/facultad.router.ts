import { Router } from 'express';
import { masterGuard } from '../middewares/login.guard';
import { createFac, deleteFacultadById, getAllFacultad, getFacultadById, updateFac } from '../controllers/facultad.controller';
const router = Router();

/**
 * @swagger
 * /api/facultades:
 *   get:
 *     tags:
 *       - Facultades
 *     summary: Obtener todas las facultades
 *     responses:
 *       200:
 *         description: Lista de facultades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Facultad'
 */
router.get('/facultades', getAllFacultad);
/**
 * @swagger
 * /api/facultad/{id}:
 *   get:
 *     tags:
 *       - Facultades
 *     summary: Obtener facultad por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la facultad
 *     responses:
 *       200:
 *         description: Facultad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Facultad'
 *       404:
 *         description: Facultad no encontrada
 */
router.get('/facultad/:id', getFacultadById);
/**
 * @swagger
 * /api/facultad:
 *   post:
 *     tags:
 *       - Facultades
 *     summary: Crear nueva facultad
 *     security:
 *       - ADMIN: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             nombre:
 *               type: string
 *               description: Nombre de la facultad
 *               example: FIO
 *     responses:
 *       204:
 *         description: Facultad creada
 *       500:
 *         description: Error en el servidor
 */
router.post('/facultad',masterGuard,createFac);
/**
 * @swagger
 * /api/facultad/{id}:
 *   put:
 *     tags:
 *       - Facultades
 *     summary: Actualizar facultad
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la facultad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             nombre:
 *               type: string
 *               description: Nuevo nombre de la facultad
 *               example: FIO
 *     responses:
 *       204:
 *         description: Facultad actualizada
 *       404:
 *         description: Facultad no encontrada
 */
router.put('/facultad/:id',masterGuard,updateFac);
/**
 * @swagger
 * /api/facultad/{id}:
 *   delete:
 *     tags:
 *       - Facultades
 *     summary: Eliminar facultad
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la facultad
 *     responses:
 *       204:
 *         description: Facultad eliminada
 *       404:
 *         description: Facultad no encontrada
 */
router.delete('/facultad/:id',masterGuard,deleteFacultadById);

export default router;