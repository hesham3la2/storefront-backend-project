import { Router } from 'express';
import { index, show, create, addProduct } from '../handlers/orders.handler';

const router = Router();

router.get('/', index);

router.get('/:id', show);

router.post('/', create);
router.post('/:id/products', addProduct);

export default router;
