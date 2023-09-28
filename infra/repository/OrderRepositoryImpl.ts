import { OrderRepository } from '@application/interfaces/OrderRepository';
import { Order } from '@domain/Order';
import { DbClient } from '@infra/db/DatabaseClient';

export class OrderRepositoryIpml implements OrderRepository {
  constructor(private client: DbClient<Order[]>) {}
  async getOrders(): Promise<Order[] | undefined> {
    const { data, error } = await this.client.read();
    if (error) {
      console.log('failed to read from orders repo');
      return undefined;
    }
    return data;
  }
  async getOrdersByDate(date: Date): Promise<Order[] | undefined> {
    // normally if we use external DB services, it should have query option to get specific date.
    // However, here I am filtering upon the query result.
    const { data, error } = await this.client.read();
    if (error) {
      console.log('failed to read from orders repo');
      return undefined;
    }
    if (!data) return data;
    const filteredData = data.filter((order) => {
      const orderDate = new Date(order.orderDate);
      return isSameDate(orderDate, date);
    });
    return filteredData;
  }
}

const isSameDate = (date1: Date, date2: Date) => {
  // I am simplifying by assuming that order year and month should be the same.
  return date1.getDate() === date2.getDate();
};
