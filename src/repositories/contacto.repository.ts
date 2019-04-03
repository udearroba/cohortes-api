import { DefaultCrudRepository } from '@loopback/repository';
import { Contacto } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ContactoRepository extends DefaultCrudRepository<
  Contacto,
  typeof Contacto.prototype.id
  > {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Contacto, dataSource);
  }
}
