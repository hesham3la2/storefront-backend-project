import { Request, Response } from 'express';
import { CategoryStore } from '../models/category.model';

const store = new CategoryStore();

export const index = async (_req: Request, res: Response) => {
  const categories = await store.index();
  res.json(categories);
};
export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await store.show(+id);
  res.json(category);
};
export const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await store.create(name);
  res.json(category);
};
