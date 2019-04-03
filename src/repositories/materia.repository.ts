import {DefaultCrudRepository} from '@loopback/repository';
import {Materia} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriaRepository extends DefaultCrudRepository<
  Materia,
  typeof Materia.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Materia, dataSource);
  }
}
