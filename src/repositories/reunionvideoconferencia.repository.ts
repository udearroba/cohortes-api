import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Reunionvideoconferencia} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReunionvideoconferenciaRepository extends DefaultCrudRepository<
  Reunionvideoconferencia,
  typeof Reunionvideoconferencia.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Reunionvideoconferencia, dataSource);
  }
}
