import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Cursocohorte} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CursocohorteRepository extends DefaultCrudRepository<
  Cursocohorte,
  typeof Cursocohorte.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Cursocohorte, dataSource);
  }
}
