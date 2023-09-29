const ITEM_USER_LANGUAGE: Record<Items, string> = {
  wine: 'Bottle of wine',
  redRoses: 'Red Roses Bouquet',
  perfume: "Women's perfume",
  pen: 'Pen',
  loveCard: 'Love card',
  giftCard: '$100 Visa Gift Card',
  birthdayCard: 'Birthday card',
  chocolate: 'Box of chocolates',
  cupcake: 'Birthday cupcake',
  fruit: 'Fruit basket',
};

export class ItemMapper {
  static toUserLanguage(item: Items) {
    return ITEM_USER_LANGUAGE[item];
  }
}
