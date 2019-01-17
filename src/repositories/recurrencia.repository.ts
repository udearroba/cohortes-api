import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Recurrencia} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RecurrenciaRepository extends DefaultCrudRepository<
  Recurrencia,
  typeof Recurrencia.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Recurrencia, dataSource);
  }
}
