import { Router } from 'express';
import { createHorario, deleteHorarioById, getAllHorario, getHorarioById, updateHorario } from '../controllers/horario.controller';
import { bossGuard } from '../middewares/login.guard';

const router = Router();

router.get('/horarios', getAllHorario);
router.get('/horario/:id', getHorarioById);
router.post('/horario',bossGuard,createHorario);
router.put('/horario/:id',bossGuard,updateHorario);
router.delete('/horario/:id',bossGuard,deleteHorarioById);

export default router;