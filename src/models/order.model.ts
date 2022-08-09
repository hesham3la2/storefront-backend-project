import Client from '../database';

// #### Orders
// - id
// - id of each product in the order
// - quantity of each product in the order
// - user_id
// - status of order (active or complete)

export enum Order_Status {
  ACTIVE,
  COMPLETE,
}

export type Order = {
  id?: number;
  user_id: number;
  status: Order_Status;
};

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      const orders = result.rows;
      return orders;
    } catch (error) {
      throw new Error('Failed to return requested orders from database');
    }
  }

  async show(id: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders WHERE id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();
      const order = result.rows[0];
      return order;
    } catch (error) {
      throw new Error('Failed to find requested order from database');
    }
  }

  async create(userId: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO orders (user_id,status) VALUES ($1,$2) RETURNING *';
      const result = await conn.query(sql, [userId, Order_Status.ACTIVE]);
      conn.release();
      const order = result.rows[0];
      return order;
    } catch (error) {
      throw new Error('Failed to create new order');
    }
  }

  async addProduct(
    productId: number,
    orderId: number,
    quantity: number
  ): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO order_products (product_id, order_id, quantity) VALUES ($1,$2,$3) RETURNING *';
      const result = await conn.query(sql, [productId, orderId, quantity]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Failed to add new product to order with id: ${orderId}`);
    }
  }
}
