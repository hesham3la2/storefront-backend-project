import { Router } from 'express';
import {
  index,
  getOderByUser,
  create,
  addProduct,
} from '../handlers/orders.handler';
import { auth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/',auth, index);

router.get('/:id/users', auth, getOderByUser);

router.post('/', auth, create);
router.post('/:id/products', auth, addProduct);

export default router;
