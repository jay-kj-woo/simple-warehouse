import { ItemMapper } from '@application/mapper/ItemMapper';

interface Prop {
  items: Partial<Record<Items, number>>;
}
export const ListItem = ({ items }: Prop) => {
  const itemsArray = Object.entries(items);
  return (
    <div className="border border-slate-300 rounded p-10 ">
      <div className="flex font-bold text-blue-500">
        <div className="w-80">item</div> <div>quantity</div>
      </div>
      {itemsArray.map(([name, quantity]) => (
        <div key={name} className="flex ">
          <div className="w-80">{ItemMapper.toUserLanguage(name as Items)}</div>{' '}
          <div>{quantity}</div>
        </div>
      ))}
    </div>
  );
};
