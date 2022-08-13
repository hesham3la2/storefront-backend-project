import { Router } from 'express';
import {
  index,
  getOderByUser,
  create,
  addProduct,
} from '../handlers/orders.handler';
import { auth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', index);

router.get('/:id/users', getOderByUser);

router.post('/', create);
router.post('/:id/products', addProduct);

export default router;
