import { OrderDto } from '@application/dtos/OrderDto';
import { ItemMapper } from '@application/mapper/ItemMapper';
import { LineItemMapper } from '@application/mapper/LineItemMapper';

interface Props {
  order: OrderDto;
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

  const lineItemsInUserLanguage = lineItems.map((lineItem) => {
    const { productName, productItems } = lineItem;
    const newProductItems = productItems.map((item) => {
      const { name, quantity } = item;
      return {
        name: ItemMapper.toUserLanguage(name),
        quantity,
      };
    });
    const newProductName = LineItemMapper.toUserLanguage(productName);
    return {
      ...lineItem,
      productName: newProductName,
      productItems: newProductItems,
    };
  });

  return (
    <div className="flex ">
      <div className="border border-slate-300 p-2 w-10">{orderId}</div>
      <div className="border border-slate-300 p-2 w-16">{orderTotal}</div>
      <div className="border border-slate-300 p-2 w-36">
        {formatDate(orderDate)}
      </div>
      <div className="border border-slate-300 p-2  w-80 overflow-x-auto">
        <ul>
          {lineItemsInUserLanguage.map((lineItem) => (
            <li key={`lineItem-${lineItem.id}`}>
              {lineItem.productName}
              <ul>
                {lineItem.productItems.map((item) => (
                  <li
                    key={`lineItem-${lineItem.id}-productItem-${item.name}`}
                    className="flex px-8  w-60 justify-between"
                  >
                    <div>{item.name}</div>
                    <div>{item.quantity}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-slate-300 p-2 w-24">{customerName}</div>
      <div className="border border-slate-300 p-2 w-72">{customerEmail}</div>
      <div className="border border-slate-300 p-2 w-80">{shippingAddress}</div>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
