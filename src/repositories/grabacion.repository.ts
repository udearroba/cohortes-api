import {DefaultCrudRepository} from '@loopback/repository';
import {Grabacion} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GrabacionRepository extends DefaultCrudRepository<
  Grabacion,
  typeof Grabacion.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Grabacion, dataSource);
  }
}
