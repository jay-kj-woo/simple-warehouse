import { LineItemDto } from './LineItemDto';

export interface OrderDto {
  orderId: string;
  orderTotal: number;
  orderDate: string;
  shippingAddress: string;
  customerName: string;
  customerEmail: string;
  lineItems: LineItemDto[];
}
