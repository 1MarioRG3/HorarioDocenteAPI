import { Router } from 'express';
import { createNewAño, deleteAñoById, getAllAños, getAñoById, updateNewAño } from '../controllers/año.controller';
import { bossGuard, masterGuard } from '../middewares/login.guard';

const router = Router();

/**
 * @swagger
 * /api/years:
 *   get:
 *     tags:
 *       - Años
 *     summary: Obtener todos los años
 *     responses:
 *       200:
 *         description: Lista de años
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Year'
 *       500:
 *         description: Error en el servidor
 */
router.get('/years', getAllAños);
/**
 * @swagger
 * /api/year/{id}:
 *   get:
 *     tags:
 *       - Años
 *     summary: Obtener año por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del año
 *     responses:
 *       200:
 *         description: Año encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Year'
 *       404:
 *         description: Año no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/year/:id', getAñoById);
/**
 * @swagger
 * /api/year:
 *   post:
 *     tags:
 *       - Años
 *     summary: Crear nuevo año
 *     security:
 *       - ADMIN: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del año docente
 *                 example: 1er Año
 *     responses:
 *       204:
 *         description: Año creado
 *       404:
 *         description: Año no encontrado
 */
router.post('/year',masterGuard,createNewAño);
/**
 * @swagger
 * /api/year/{id}:
 *   put:
 *     tags:
 *       - Años
 *     summary: Actualizar año
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del año
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre del año docente
 *                 example: 1er Año
 *     responses:
 *       204:
 *         description: Año editado con exito
 *       404:
 *         description: Año no encontrado
 */
router.put('/year/:id',masterGuard,updateNewAño);
/**
 * @swagger
 * /api/year/{id}:
 *   delete:
 *     tags:
 *       - Años
 *     summary: Eliminar año
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del año
 *     responses:
 *       204:
 *         description: Año eliminado
 *       404:
 *         description: Año no encontrado
 */
router.delete('/year/:id',masterGuard,deleteAñoById);

export default router;