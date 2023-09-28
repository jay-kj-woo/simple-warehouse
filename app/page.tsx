import { GetOrders } from '@application/usecases/GetOrders';
import { Order } from '@domain/Order';
import { DatabaseClient } from '@infra/db/DatabaseClient';
import { OrderRepositoryIpml } from '@infra/repository/OrderRepositoryImpl';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center gap-10 p-24">
      <Link
        className="rounded-sm px-4 py-2 font-medium text-white hover:bg-slate-500 border-2 border-slate-200"
        href={'/orders'}
      >
        to Order List page
      </Link>
      <Link
        className="rounded-sm px-4 py-2 font-medium text-white hover:bg-slate-500 border-2 border-slate-200"
        href={'/pickups'}
      >
        to Pickup List page
      </Link>
    </main>
  );
}
