import { getOrdersAction } from '@/serverActions/getOrdersAction';
import { OrderList } from './OrderList';

export default async function OrderListPage() {
  const orders = await getOrdersAction();

  if (!orders.length) return <div>There is no order remaining to process!</div>;
  return (
    <div>
      <OrderList orders={orders} />
    </div>
  );
}
