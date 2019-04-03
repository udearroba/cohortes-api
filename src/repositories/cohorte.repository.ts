import { DefaultCrudRepository } from '@loopback/repository';
import { Cohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CohorteRepository extends DefaultCrudRepository<
  Cohorte,
  typeof Cohorte.prototype.id
  > {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Cohorte, dataSource);
  }
}
