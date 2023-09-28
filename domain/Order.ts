import { LineItem } from './LineItem';

export interface Order {
  orderId: string;
  orderTotal: number;
  orderDate: string;
  shippingAddress: string;
  customerName: string;
  customerEmail: string;
  lineItems: LineItem[];
}
