export interface IGenericRepository<T> {
  findAll(): Promise<T[]>;
  find(id: any): Promise<T>;
  create(item: T): Promise<T>;
  update(id: any, obj: any);
  delete(id: any): Promise<T>;
}
