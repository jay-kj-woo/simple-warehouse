import { Item } from '@domain/Item';

export interface LineItemDto {
  id: string;
  productId: string;
  productName: LineItems;
  productItems: Item[];
  price: number;
}
