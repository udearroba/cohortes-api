import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cohorte, Cursoprogramado } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CursoprogramadoRepository } from './cursoprogramado.repository';

export class CohorteRepository extends DefaultCrudRepository<
  Cohorte,
  typeof Cohorte.prototype.id
  > {

  public readonly cursosprogramados: HasManyRepositoryFactory<
    Cursoprogramado,
    typeof Cohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(CursoprogramadoRepository)
    protected cursoprogramadoRepositoryGetter: Getter<CursoprogramadoRepository>,
  ) {
    super(Cohorte, dataSource);
    this.cursosprogramados = this.createHasManyRepositoryFactoryFor(
      'cursosprogramados',
      cursoprogramadoRepositoryGetter,
    )
  }
}
