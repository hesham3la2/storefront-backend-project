import { NextFunction, Request, Response } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

import { UserStore } from '../models/user.model';

dotenv.config();

const { AUTH_SECRET } = process.env;

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authString = req.headers.authorization;
    if (!authString) throw new Error('unauthorized');
    const token = authString.substring(7);

    const { id } = jwt.verify(token, AUTH_SECRET as Secret) as JwtPayload;
    if (!id) throw new Error('unauthorized');

    const store = new UserStore();
    const user = await store.show(id);

    if (!user) throw new Error('unauthorized');

    res.locals.user = user;

    next();
  } catch (error) {
    res.status(401).json(error);
  }
};
