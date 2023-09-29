import { OrderItem } from './OrderItem';
import { OrderDto } from '@application/dtos/OrderDto';

interface Props {
  orders: OrderDto[];
}

export const OrderList = ({ orders }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex ">
        <div className="border border-slate-300 p-2 text-center w-10">ID</div>
        <div className="border border-slate-300 p-2 text-center w-16">$</div>
        <div className="border border-slate-300 p-2 text-center w-36">Date</div>
        <div className="border border-slate-300 p-2 text-center  w-80 overflow-x-auto">
          LineItems
        </div>
        <div className="border border-slate-300 p-2 text-center w-24">Name</div>
        <div className="border border-slate-300 p-2 text-center w-72">
          Email
        </div>
        <div className="border border-slate-300 p-2 text-center w-80">
          Address
        </div>
      </div>
      {orders.map((order) => (
        <OrderItem order={order} key={order.orderId} />
      ))}
    </div>
  );
};
