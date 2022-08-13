import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Client from '../database';

dotenv.config();

const { PEPPER, SALT_ROUNDS } = process.env;
export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
};

type UserInput = User & { password: string };

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      const users = result.rows;
      return users.map((user) => {
        delete user.password;
        return user;
      });
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }

  async show(id: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();
      const user = result.rows[0];
      delete user.password;
      return user;
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }

  async create(user: UserInput): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO users (firstname,lastname,email,password) VALUES ($1,$2,$3,$4) RETURNING *';

      const hashed_password = bcrypt.hashSync(
        user.password + PEPPER,
        parseInt(SALT_ROUNDS!)
      );

      const result = await conn.query(sql, [
        user.firstname,
        user.lastname,
        user.email,
        hashed_password,
      ]);
      conn.release();

      const newUser = result.rows[0];
      delete newUser.password;
      return newUser;
    } catch (error) {
      throw new Error('Failed to connect to database');
    }
  }

  async login(email: string, password: string): Promise<User | null> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE email = $1';
      const result = await conn.query(sql, [email]);
      conn.release();
      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password + PEPPER, user.password)) {
          delete user.password;
          return user;
        } else {
          throw new Error('wrong password');
        }
      } else {
        throw new Error('There is no user registered with this email');
      }
    } catch (error) {
      throw new Error('failed user login');
    }
  }
}
