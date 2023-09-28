'use client';

import { Order } from '@domain/Order';
import { ChangeEvent, useState } from 'react';
import { ListItem } from './ListItem';
import { getPickupListAction } from '@/serverActions/getPickupListAction';

interface Props {
  orders: Order[];
}
export const PickupList = ({ orders }: Props) => {
  const dates = getAvailableDate(orders);
  const [selected, setSelected] = useState('');
  const [list, setList] = useState<Partial<Record<Items, number>> | null>(null);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const handleSubmit = async (date: string) => {
    if (!date) {
      setList(null);
      return;
    }
    const lists = await getPickupListAction(new Date(date));
    if (lists) {
      setList(lists);
    }
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-6">
        <select
          className=" bg-slate-700"
          value={selected}
          onChange={handleSelectChange}
          name="dateasdf"
        >
          <option value="">--select the date--</option>
          {dates.map((date) => (
            <option value={date} key={date}>
              {date}
            </option>
          ))}
        </select>
        <button
          className="rounded px-4 py-2 border-slate-300 border"
          onClick={() => {
            handleSubmit(selected);
          }}
        >
          Show Items
        </button>
      </div>
      {list && <ListItem items={list} />}
    </div>
  );
};

const getAvailableDate = (orders: Order[]) => {
  const dateSet = new Set<string>();
  orders.forEach((order) => {
    const date = new Date(order.orderDate);
    const dateStamp = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    dateSet.add(dateStamp);
  });

  const dates = Array.from(dateSet);
  return dates;
};
