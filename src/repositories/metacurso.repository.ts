import {DefaultCrudRepository} from '@loopback/repository';
import {Metacurso} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MetacursoRepository extends DefaultCrudRepository<
  Metacurso,
  typeof Metacurso.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Metacurso, dataSource);
  }
}
