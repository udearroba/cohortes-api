import {DefaultCrudRepository} from '@loopback/repository';
import {Contacto} from '../models';
import {MemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ContactoRepository extends DefaultCrudRepository<
  Contacto,
  typeof Contacto.prototype.id
> {
  constructor(
    @inject('datasources.memorydb') dataSource: MemorydbDataSource,
  ) {
    super(Contacto, dataSource);
  }
}
