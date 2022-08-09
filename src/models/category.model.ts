import Client from '../database';

export type Category = {
  id: number;
  name: string;
};

export class CategoryStore {
  async index(): Promise<Category[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM categories';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }

  async show(id: number): Promise<Category> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM categories WHERE id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }
  async create(name: string): Promise<Category> {
    try {
      const conn = await Client.connect();
      const sql = 'INSERT INTO categories (name) VALUES ($1) RETURNING *';
      const result = await conn.query(sql, [name]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }
}
