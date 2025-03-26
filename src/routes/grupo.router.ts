import { Router } from 'express';
import { createGrupo, deleteGrupoById, getAllGrupo, getGrupoById, updateGrupo } from '../controllers/grupo.controller';
import { bossGuard, masterGuard } from '../middewares/login.guard';

const router = Router();

router.get('/grupos', getAllGrupo);
router.get('/grupo/:id', getGrupoById);
router.post('/grupo',masterGuard,createGrupo);
router.put('/grupo/:id',masterGuard,updateGrupo);
router.delete('/grupo/:id',masterGuard,deleteGrupoById);

export default router;