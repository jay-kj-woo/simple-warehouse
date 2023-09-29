import { getOrdersAction } from '@/serverActions/getOrdersAction';
import { OrderList } from './OrderList';

export default async function OrderListPage() {
  const orders = await getOrdersAction();

  if (!orders.length) return <div>There is no order remaining to process!</div>;
  return (
    <div>
      <h1 className="font-bold text-2xl mb-10 text-center">Order List</h1>
      <OrderList orders={orders} />
    </div>
  );
}
