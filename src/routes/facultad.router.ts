import { Router } from 'express';
import { masterGuard } from '../middewares/login.guard';
import { createFac, deleteFacultadById, getAllFacultad, getFacultadById, updateFac } from '../controllers/facultad.controller';
const router = Router();

router.get('/facultades', getAllFacultad);
router.get('/facultad/:id', getFacultadById);
router.post('/facultad',masterGuard,createFac);
router.put('/facultad/:id',masterGuard,updateFac);
router.delete('/facultad/:id',masterGuard,deleteFacultadById);

export default router;