import Client from '../database';

export type Product = {
  id?: number;
  name: string;
  price: number;
  category_id: number;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products WHERE id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO products (name,price,category_id) VALUES ($1,$2,$3) RETURNING *';
      const result = await conn.query(sql, [
        product.name,
        product.price,
        product.category_id,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }
}
