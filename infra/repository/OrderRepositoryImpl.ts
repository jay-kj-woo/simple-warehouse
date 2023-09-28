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
}
