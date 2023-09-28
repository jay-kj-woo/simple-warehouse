import { getPickupListAction } from '@/serverActions/getPickupListAction';

interface Prop {
  items: Partial<Record<Items, number>>;
}
export const ListItem = ({ items }: Prop) => {
  return (
    <div className="border border-slate-300 rounded p-10">
      {JSON.stringify(items)}
    </div>
  );
};
