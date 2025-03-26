import { Router } from 'express';
import { createTurno, deleteTurnoById, getAllTurno, getTurnoById, updateTurno } from '../controllers/turno.controller';
import { bossGuard } from '../middewares/login.guard';

const router = Router();

router.get('/turnos', getAllTurno);
router.get('/turno/:id', getTurnoById);
router.post('/turno',bossGuard,createTurno);
router.put('/turno/:id',bossGuard,updateTurno);
router.delete('/turno/:id',bossGuard,deleteTurnoById);

export default router;