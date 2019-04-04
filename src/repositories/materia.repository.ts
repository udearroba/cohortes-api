import { DefaultCrudRepository, repository, HasManyRepositoryFactory } from '@loopback/repository';
import { Materia, Cursoprogramado } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CursoprogramadoRepository } from './cursoprogramado.repository';

export class MateriaRepository extends DefaultCrudRepository<
  Materia,
  typeof Materia.prototype.id
  > {

  public readonly cursosprogramados: HasManyRepositoryFactory<
    Cursoprogramado,
    typeof Materia.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(CursoprogramadoRepository)
    protected cursoprogramadoRepositoryGetter: Getter<CursoprogramadoRepository>
  ) {
    super(Materia, dataSource);
    this.cursosprogramados = this.createHasManyRepositoryFactoryFor(
      'cursosprogramados',
      cursoprogramadoRepositoryGetter,
    )
  }
}
