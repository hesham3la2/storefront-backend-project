import { Request, Response } from 'express';
import { ProductStore } from '../models/product.model';

const store = new ProductStore();

export const index = async (_req: Request, res: Response) => {
  const products = await store.index();
  res.json(products);
};
export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await store.show(+id);
  res.json(product);
};
export const create = async (req: Request, res: Response) => {
  const data = req.body;
  const product = await store.create(data);
  res.json(product);
};
