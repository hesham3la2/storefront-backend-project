import { Router } from 'express';

import productsRoute from './products.route';
import usersRoute from './users.route';
import ordersRoute from './orders.route';

const router = Router();

router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.use('/orders', ordersRoute);

export default router;
