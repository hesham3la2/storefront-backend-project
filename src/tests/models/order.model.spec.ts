import { Order_Status, OrderStore } from '../../models/order.model';
import { UserStore } from '../../models/user.model';

const orderStore = new OrderStore();
const userStore = new UserStore();

describe('Order Model', () => {
  describe('Are required methods exist', () => {
    it('should have index method', () => {
      expect(orderStore.index).toBeDefined();
    });
    it('should have show method', () => {
      expect(orderStore.show).toBeDefined();
    });
    it('should have create method', () => {
      expect(orderStore.create).toBeDefined();
    });
    it('should have addProduct method', () => {
      expect(orderStore.addProduct).toBeDefined();
    });
  });
  describe('test order model methods', () => {
    const testOrder = {
      id: 1,
      user_id: 1,
      status: Order_Status.ACTIVE,
    };

    it('create method should return created order', async () => {
      const result = await orderStore.create(1);
      expect(result).toEqual(testOrder);
    });
    it('index method should return list of orders', async () => {
      const result = await orderStore.index();
      expect(result).toEqual([testOrder]);
    });
    it('show method should return order by id', async () => {
      const result = await orderStore.show(1);
      expect(result).toEqual(testOrder);
    });
  });
});
