import { Router } from 'express';
import { createDia, deleteDiaById, getAllDia, getDiaById, updateDia } from '../controllers/dia.controller';
import { bossGuard, masterGuard } from '../middewares/login.guard';
const router = Router();

router.get('/dias', getAllDia);
router.get('/dia/:id', getDiaById);
router.post('/dia',masterGuard,createDia);
router.put('/dia/:id',masterGuard,updateDia);
router.delete('/dia/:id',masterGuard,deleteDiaById);

export default router;