import { Order_Status, OrderStore } from '../../models/order.model';
import { UserStore } from '../../models/user.model';

const store = new OrderStore();
const userStore = new UserStore();

describe('Order Model', () => {
  describe('Are required methods exist', () => {
    it('should have index method', () => {
      expect(store.index).toBeDefined();
    });
    it('should have getOderByUser method', () => {
      expect(store.getOderByUser).toBeDefined();
    });
    it('should have create method', () => {
      expect(store.create).toBeDefined();
    });
    it('should have addProduct method', () => {
      expect(store.addProduct).toBeDefined();
    });
  });
  describe('test order model methods', () => {
    const testOrder = {
      id: 1,
      user_id: 1,
      status: Order_Status.ACTIVE,
    };

    it('create method should return created order', async () => {
      const result = await store.create(1);
      expect(result).toEqual(testOrder);
    });
    it('index method should return list of orders', async () => {
      const result = await store.index();
      expect(result).toEqual([testOrder]);
    });
    it('getOderByUser method should return order by user id', async () => {
      const result = await store.getOderByUser(1);
      expect(result).toEqual(testOrder);
    });
  });
});
