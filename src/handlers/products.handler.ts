import { Request, Response } from 'express';
import { ProductStore } from '../models/product.model';

const store = new ProductStore();

export const index = async (_req: Request, res: Response) => {
  try {
    const products = await store.index();
    res.json(products);
  } catch (error) {
    res.status(404);
  }
};
export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await store.show(+id);
    res.json(product);
  } catch (error) {
    res.status(404);
  }
};
export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const product = await store.create(data);
    res.json(product);
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};
