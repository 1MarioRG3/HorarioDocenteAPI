import { Router } from 'express';
import { createJefe, deleteJefeById, getAllJefe, getJefeById, updateJefe } from '../controllers/jefe.controller';
import { masterGuard } from '../middewares/login.guard';

const router = Router();

router.get('/jefes',masterGuard, getAllJefe);
router.get('/jefe/:id',masterGuard, getJefeById);
router.post('/jefe',masterGuard, createJefe);
router.put('/jefe/:id',masterGuard, updateJefe);
router.delete('/jefe/:id',masterGuard, deleteJefeById);

export default router;