import { Order } from '@domain/Order';
import { UseCase } from './UseCase';
import { OrderRepository } from '../interfaces/OrderRepository';

export class GetOrders implements UseCase<undefined, Order[]> {
  constructor(private repo: OrderRepository) {}

  async execute(): Promise<Order[]> {
    const orderList = await this.repo.getOrders();
    if (!orderList) {
      throw new Error('failed to get orders');
    }
    return orderList;
  }
}
