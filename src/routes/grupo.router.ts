import { Router } from 'express';
import { createGrupo, deleteGrupoById, getAllGrupo, getGrupoById, updateGrupo } from '../controllers/grupo.controller';
import { bossGuard, masterGuard } from '../middewares/login.guard';

const router = Router();

/**
 * @swagger
 * /api/grupos:
 *   get:
 *     tags:
 *       - Grupos
 *     summary: Obtener todos los grupos
 *     responses:
 *       200:
 *         description: Lista de grupos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Grupo'
 */
router.get('/grupos', getAllGrupo);
/**
 * @swagger
 * /api/grupo/{id}:
 *   get:
 *     tags:
 *       - Grupos
 *     summary: Obtener grupo por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del grupo
 *     responses:
 *       200:
 *         description: Grupo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Grupo'
 *       404:
 *         description: Grupo no encontrado
 */
router.get('/grupo/:id', getGrupoById);
/**
 * @swagger
 * /api/grupo:
 *   post:
 *     tags:
 *       - Grupos
 *     summary: Crear nuevo grupo
 *     security:
 *       - ADMIN: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Grupo'
 *     responses:
 *       204:
 *         description: Grupo creado
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: Se requiere autorizacion
 */
router.post('/grupo',masterGuard,createGrupo);
/**
 * @swagger
 * /api/grupo/{id}:
 *   put:
 *     tags:
 *       - Grupos
 *     summary: Actualizar grupo
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del grupo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Grupo'
 *     responses:
 *       204:
 *         description: Grupo actualizado
 *       404:
 *         description: Grupo no encontrado
 *       401:
 *         description: Se requiere autorizacion
 */
router.put('/grupo/:id',masterGuard,updateGrupo);
/**
 * @swagger
 * /api/grupo/{id}:
 *   delete:
 *     tags:
 *       - Grupos
 *     summary: Eliminar grupo
 *     security:
 *       - ADMIN: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del grupo
 *     responses:
 *       204:
 *         description: Grupo eliminado
 *       404:
 *         description: Grupo no encontrado
 *       401:
 *         description: Se requiere autorizacion
 */
router.delete('/grupo/:id',masterGuard,deleteGrupoById);

export default router;