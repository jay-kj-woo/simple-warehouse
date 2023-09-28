import { Order } from '@domain/Order';
import { OrderItem } from './OrderItem';

interface Props {
  orders: Order[];
}

export const OrderList = ({ orders }: Props) => {
  return (
    <>
      <div className="flex ">
        <div className="border border-slate-300 w-6">ID</div>
        <div className="border border-slate-300 w-10">Total</div>
        <div className="border border-slate-300 w-36">Date</div>
        <div className="border border-slate-300  w-80 overflow-x-auto">
          LineItems
        </div>
        <div className="border border-slate-300 w-24">Name</div>
        <div className="border border-slate-300 w-72">Email</div>
        <div className="border border-slate-300 w-80">Address</div>
      </div>
      {orders.map((order) => (
        <OrderItem order={order} key={order.orderId} />
      ))}
    </>
  );
};
