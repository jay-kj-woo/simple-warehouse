import { getOrdersAction } from '@/serverActions/getOrdersAction';
import { PickupList } from './PickupList';

export default async function PickupListPage() {
  const orders = await getOrdersAction();

  return (
    <div>
      <h1 className="font-bold text-2xl mb-10 text-center">Pickup List</h1>
      <PickupList orders={orders} />
    </div>
  );
}
