import { UserStore } from '../../models/user.model';

const store = new UserStore();

describe('User Model', () => {
  describe('Are required methods exist', () => {
    it('should have index method', () => {
      expect(store.index).toBeDefined();
    });
    it('should have show method', () => {
      expect(store.show).toBeDefined();
    });
    it('should have create method', () => {
      expect(store.create).toBeDefined();
    });
    it('should have login method', () => {
      expect(store.login).toBeDefined();
    });
  });
  describe('test user model methods', () => {
    const testUser = {
      id: 1,
      firstname: 'first',
      lastname: 'last',
      email: 'email@email.com',
    };

    it('create method should return created user', async () => {
      const result = await store.create({
        ...testUser,
        password: 'hashed-string',
      });
      expect(result).toEqual(testUser);
    });
    it('index method should return list of users', async () => {
      const result = await store.index();
      expect(result).toEqual([testUser]);
    });
    it('show method should return user by id', async () => {
      const result = await store.show(1);
      expect(result).toEqual(testUser);
    });
    it('login method should return user by email', async () => {
      const result = await store.login('email@email.com', 'hashed-string');
      expect(result).toEqual(testUser);
    });
  });
});
