import { Router } from 'express';
import { login, masterLogin } from '../controllers/login.controller';

const router = Router();

router.post('/login', login);
router.post('/login/master',masterLogin);

export default router;