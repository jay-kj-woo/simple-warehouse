import { Item } from '@domain/Item';
import { LineItem } from '@domain/LineItem';

const PRODUCT_CONFIGURATION: Record<LineItems, Item[]> = {
  valentineBox: [
    { name: 'redRoses', quantity: 1 },
    { name: 'chocolate', quantity: 1 },
    { name: 'loveCard', quantity: 1 },
    { name: 'perfume', quantity: 1 },
  ],
  birthdayBox: [
    { name: 'cupcake', quantity: 1 },
    { name: 'giftCard', quantity: 1 },
    { name: 'birthdayCard', quantity: 1 },
  ],
  cleanGiftBox: [
    { name: 'wine', quantity: 1 },
    { name: 'fruit', quantity: 1 },
    { name: 'pen', quantity: 1 },
  ],
};

export class LineItemMapper {
  static toItems(lineItem: LineItem) {
    const { productName } = lineItem;
    return PRODUCT_CONFIGURATION[productName];
  }
}
