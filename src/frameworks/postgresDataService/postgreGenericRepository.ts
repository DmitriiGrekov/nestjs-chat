import { HttpException, HttpStatus } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { IGenericRepository } from 'src/core/interfaces/IGenericRepository.interfaces';
import { Repository } from 'typeorm';

export class PostgresGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;
  private _relations: string[];

  constructor(repository: Repository<T>, relations: string[] = []) {
    this._repository = repository;
    this._relations = relations;
  }

  findAll() {
    return this._repository.find({ relations: this._relations });
  }

  async find(id) {
    const user = await this._repository.findOneById(id);
    return user;
  }

  create(item) {
    return this._repository.save(item);
  }

  async update(id, obj) {
    let item = await this._repository.findByIds(id);
    item = { ...item, ...obj }
    return this._repository.save({ ...item });
  }

  delete(id) {
    const item = this._repository.findOneBy(id);
    if (!item)
      throw new HttpException(
        `Объект с id = ${id} не найден`,
        HttpStatus.NOT_FOUND,
      );
    this._repository.delete(id);
    return item;
  }
}
