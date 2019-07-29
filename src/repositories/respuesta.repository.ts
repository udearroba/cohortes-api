import {DefaultCrudRepository} from '@loopback/repository';
import {Respuesta, RespuestaRelations} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RespuestaRepository extends DefaultCrudRepository<
  Respuesta,
  typeof Respuesta.prototype.id,
  RespuestaRelations
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Respuesta, dataSource);
  }
}
