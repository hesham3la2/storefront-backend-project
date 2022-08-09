import { Request, Response } from 'express';
import { UserStore } from '../models/user.model';

const store = new UserStore();

export const index = async (_req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
};
export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await store.show(+id);
  res.json(user);
};
export const create = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await store.create(data);
  res.json(user);
};
