import { OrderDto } from '@application/dtos/OrderDto';
import { Order } from '@domain/Order';
import { LineItemMapper } from './LineItemMapper';

export class OrderMapper {
  static toOrderDto(order: Order): OrderDto {
    const {
      shippingAddress,
      orderTotal,
      orderId,
      orderDate,
      lineItems,
      customerName,
      customerEmail,
    } = order;

    const newLineItems = lineItems.map((lineItem) => {
      const lineItemDto = LineItemMapper.toLineItemDto(lineItem);
      return lineItemDto;
    });

    return {
      shippingAddress,
      orderDate,
      orderId,
      orderTotal,
      customerEmail,
      customerName,
      lineItems: newLineItems,
    };
  }
}
