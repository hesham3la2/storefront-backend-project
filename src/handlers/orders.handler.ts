import { Request, Response } from 'express';
import { OrderStore } from '../models/order.model';

const store = new OrderStore();

export const index = async (_req: Request, res: Response) => {
  try {
    const orders = await store.index();
    res.json(orders);
  } catch (error) {
    res.status(404);
  }
};

export const getOderByUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await store.getOderByUser(+id);
    res.json(order);
  } catch (error) {
    res.status(404);
  }
};
export const create = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const order = await store.create(userId);
    res.json(order);
  } catch (error) {
    res.status(400);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const { quantity, productId } = req.body;
    const { id: orderId } = req.params;
    const order = await store.addProduct(+productId, +orderId, quantity);
    res.json(order);
  } catch (error) {
    res.status(400);
  }
};
