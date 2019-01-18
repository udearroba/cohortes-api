import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Horariocurso} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HorariocursoRepository extends DefaultCrudRepository<
  Horariocurso,
  typeof Horariocurso.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Horariocurso, dataSource);
  }
}
