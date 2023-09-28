import db from './Orders.json';

export class DatabaseClient<T> implements DbClient<T> {
  constructor() {}
  async read() {
    const response = db.orders;
    if (!response) {
      return { error: 'failed to read from orders db' };
    }
    return { data: response as T };
  }
}

export interface DbClient<T> {
  read(): Promise<{ data?: T; error?: any }>;
}
