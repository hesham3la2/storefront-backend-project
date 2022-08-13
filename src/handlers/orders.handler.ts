import { Request, Response } from 'express';
import { OrderStore } from '../models/order.model';

const store = new OrderStore();

export const index = async (_req: Request, res: Response) => {
  const orders = await store.index();
  res.json(orders);
};

export const getOderByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await store.getOderByUser(+id);
  res.json(order);
};
export const create = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const order = await store.create(userId);
  res.json(order);
};

export const addProduct = async (req: Request, res: Response) => {
  const { quantity, productId } = req.body;
  const { id: orderId } = req.params;
  const order = await store.addProduct(+productId, +orderId, quantity);
  res.json(order);
};
