import { Router } from 'express';
import { index, show, create } from '../handlers/products.handler';
import { auth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', index);

router.get('/:id', show);

router.post('/', auth, create);

export default router;
