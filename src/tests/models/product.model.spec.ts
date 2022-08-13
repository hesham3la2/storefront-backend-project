import { ProductStore } from '../../models/product.model';

const store = new ProductStore();

describe('Product Model', () => {
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
  describe('test product model methods', () => {
    const testProduct = { id: 1, name: 'product', price: 100 };

    it('create method should return created product', async () => {
      const result = await store.create(testProduct);
      expect(result).toEqual(testProduct);
    });
    it('index method should return list of products', async () => {
      const result = await store.index();
      expect(result).toEqual([testProduct]);
    });
    it('show method should return product by id', async () => {
      const result = await store.show(1);
      expect(result).toEqual(testProduct);
    });
  });
});
