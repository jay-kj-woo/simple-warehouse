import { getOrdersAction } from '@/serverActions/getOrdersAction';
import { PickupList } from './PickupList';

export default async function PickupListPage() {
  const orders = await getOrdersAction();

  return (
    <div>
      <h1>Pick a date to see the list of pickup items</h1>
      <PickupList orders={orders} />
    </div>
  );
}
