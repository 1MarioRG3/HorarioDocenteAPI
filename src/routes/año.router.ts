import { Router } from 'express';
import { createNewAño, deleteAñoById, getAllAños, getAñoById, updateNewAño } from '../controllers/año.controller';
import { bossGuard, masterGuard } from '../middewares/login.guard';

const router = Router();

/**
* /years:
* get:
*   tags:
*     - Año
*   description: Responde algo
* responses:
*   200:
*     description: Lista de años académicos
*    500:
*      description: Error del servidor
*/
router.get('/years', getAllAños);
router.get('/year/:id', getAñoById);
router.post('/year',masterGuard,createNewAño);
router.put('/year/:id',masterGuard,updateNewAño);
router.delete('/year/:id',masterGuard,deleteAñoById);

export default router;