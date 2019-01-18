import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Ocurrencia} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OcurrenciaRepository extends DefaultCrudRepository<
  Ocurrencia,
  typeof Ocurrencia.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Ocurrencia, dataSource);
  }
}
