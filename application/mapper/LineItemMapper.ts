import { LineItemDto } from '@application/dtos/LineItemDto';
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
  clientGiftBox: [
    { name: 'wine', quantity: 1 },
    { name: 'fruit', quantity: 1 },
    { name: 'pen', quantity: 1 },
  ],
};

const LINEITEM_USER_LANGUAGE: Record<LineItems, string> = {
  valentineBox: 'Valentines Box',
  birthdayBox: 'Birthday Box',
  clientGiftBox: 'Client Gift Box',
};
export class LineItemMapper {
  static toItems(lineItem: LineItem) {
    const { productName } = lineItem;
    return PRODUCT_CONFIGURATION[productName];
  }

  static toUserLanguage(item: LineItems) {
    return LINEITEM_USER_LANGUAGE[item];
  }

  static toLineItemDto(item: LineItem): LineItemDto {
    const { productName, productId, price, id } = item;
    const productItems = this.toItems(item);
    return {
      price,
      productId,
      productName,
      id,
      productItems,
    };
  }
}
