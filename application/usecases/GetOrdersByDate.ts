import { Order } from '@domain/Order';
import { UseCase } from './UseCase';
import { OrderRepository } from '../interfaces/OrderRepository';

export class GetOrdersByDate implements UseCase<Date, Order[]> {
  constructor(private repo: OrderRepository) {}

  async execute(date: Date): Promise<Order[]> {
    const orderList = await this.repo.getOrdersByDate(date);
    if (!orderList) {
      throw new Error('failed to get orders');
    }
    return orderList;
  }
}
