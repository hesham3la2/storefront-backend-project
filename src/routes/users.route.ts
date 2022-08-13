import { Router } from 'express';
import { auth } from '../middlewares/auth.middleware';
import { index, show, create, login } from '../handlers/users.handler';

const router = Router();

router.get('/', index);

router.get('/:id', show);

router.post('/', create);
router.post('/login', login);

export default router;
