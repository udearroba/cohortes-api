import {DefaultCrudRepository} from '@loopback/repository';
import {Cohorte} from '../models';
import {MemorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CohorteRepository extends DefaultCrudRepository<
  Cohorte,
  typeof Cohorte.prototype.id
> {
  constructor(
    @inject('datasources.memorydb') dataSource: MemorydbDataSource,
  ) {
    super(Cohorte, dataSource);
  }
}
