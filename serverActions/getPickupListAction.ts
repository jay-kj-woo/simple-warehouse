import { LineItemMapper } from '@application/mapper/LineItemMapper';
import { GetOrdersByDate } from '@application/usecases/GetOrdersByDate';
import { Order } from '@domain/Order';
import { DatabaseClient } from '@infra/db/DatabaseClient';
import { OrderRepositoryIpml } from '@infra/repository/OrderRepositoryImpl';

export const getPickupListAction = async (date: Date) => {
  const client = new DatabaseClient<Order[]>();
  const repo = new OrderRepositoryIpml(client);
  const usecase = new GetOrdersByDate(repo);
  const orders = await usecase.execute(date);
  const pickupItems = converToPickupItems(orders);
  return pickupItems;
};

const converToPickupItems = (orders: Order[]) => {
  const pickupItems: Partial<Record<Items, number>> = {};
  orders.forEach((order) => {
    const { lineItems } = order;
    lineItems.forEach((lineItem) => {
      const items = LineItemMapper.toItems(lineItem);
      items.forEach((item) => {
        const { name, quantity } = item;
        pickupItems[name] = pickupItems[name]
          ? pickupItems[name]! + quantity
          : quantity;
      });
    });
  });
  return pickupItems;
};
