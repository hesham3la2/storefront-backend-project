import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserStore } from '../models/user.model';

dotenv.config();

const { AUTH_SECRET } = process.env;
const store = new UserStore();

export const index = async (_req: Request, res: Response) => {
  try {
    const users = await store.index();
    res.json(users);
  } catch (error) {
    res.status(404);
  }
};
export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await store.show(+id);
    res.json(user);
  } catch (error) {
    res.status(404);
  }
};
export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await store.create(data);
    const token = jwt.sign(user, AUTH_SECRET!);
    res.json(token);
  } catch (error) {
    res.status(400);
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await store.login(email, password);
    let token;
    if (user) token = jwt.sign(user, AUTH_SECRET!);
    res.json(token);
  } catch (error) {
    res.status(400);
  }
};
