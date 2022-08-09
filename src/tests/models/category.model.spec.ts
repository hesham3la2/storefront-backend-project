import { Category, CategoryStore } from '../../models/category.model';

const store = new CategoryStore();

describe('Gategory Model', () => {
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
  });
  describe('test category model methods', () => {
    it('create method should return created category', async () => {
      const result = await store.create('test');
      expect(result).toEqual({ id: 1, name: 'test' });
    });
    it('index method should return list of gategories', async () => {
      const result = await store.index();
      expect(result).toEqual([{ id: 1, name: 'test' }]);
    });
    it('show method should return category by id', async () => {
      const result = await store.show(1);
      expect(result).toEqual({ id: 1, name: 'test' });
    });
  });
});
