import { Order } from '@domain/Order';

interface Props {
  order: Order;
}

export const OrderItem = ({ order }: Props) => {
  const {
    shippingAddress,
    orderTotal,
    orderId,
    orderDate,
    lineItems,
    customerName,
    customerEmail,
  } = order;
  return (
    <div className="flex ">
      <div className="border border-slate-300 w-6">{orderId}</div>
      <div className="border border-slate-300 w-10">{orderTotal}</div>
      <div className="border border-slate-300 w-36">{orderDate}</div>
      <div className="border border-slate-300  w-80 overflow-x-auto">
        {JSON.stringify(lineItems)}
      </div>
      <div className="border border-slate-300 w-24">{customerName}</div>
      <div className="border border-slate-300 w-72">{customerEmail}</div>
      <div className="border border-slate-300 w-80">{shippingAddress}</div>
    </div>
  );
};
