import { Router, Request, Response } from 'express';
import { index, show, create } from '../handlers/users.handler';

const router = Router();

router.get('/', index);

router.get('/:id', show);

router.post('/', create);

export default router;
