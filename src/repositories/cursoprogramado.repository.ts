import {DefaultCrudRepository} from '@loopback/repository';
import {Cursoprogramado} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CursoprogramadoRepository extends DefaultCrudRepository<
  Cursoprogramado,
  typeof Cursoprogramado.prototype.id
> {
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Cursoprogramado, dataSource);
  }
}
