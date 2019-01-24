import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Materia, Cursoprogramado } from '../models';
import { CursoprogramadoRepository } from './cursoprogramado.repository';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class MateriaRepository extends DefaultCrudRepository<
  Materia,
  typeof Materia.prototype.id
  > {
  public readonly cursoprogramados: HasManyRepositoryFactory<
    Cursoprogramado,
    typeof Materia.prototype.id
  >;

  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('CursoprogramadoRepository')
    getCursoprogramadoRepository: Getter<CursoprogramadoRepository>,
  ) {
    super(Materia, dataSource);
    this.cursoprogramados = this.createHasManyRepositoryFactoryFor(
      'cursoprogramados',
      getCursoprogramadoRepository,
    );
  }
}
