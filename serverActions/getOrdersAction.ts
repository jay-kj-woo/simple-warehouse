import { OrderMapper } from '@application/mapper/OrderMapper';
import { GetOrders } from '@application/usecases/GetOrders';
import { Order } from '@domain/Order';
import { DatabaseClient } from '@infra/db/DatabaseClient';
import { OrderRepositoryIpml } from '@infra/repository/OrderRepositoryImpl';

export const getOrdersAction = async () => {
  const client = new DatabaseClient<Order[]>();
  const repo = new OrderRepositoryIpml(client);
  const usecase = new GetOrders(repo);
  const orders = await usecase.execute();
  const formattedOrders = orders.map((order) => OrderMapper.toOrderDto(order));
  return formattedOrders;
};
