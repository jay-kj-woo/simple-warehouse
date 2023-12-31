import { Order } from '@domain/Order';

export interface OrderRepository {
  getOrders(): Promise<Order[] | undefined>;
  getOrdersByDate(date: Date): Promise<Order[] | undefined>;
}
