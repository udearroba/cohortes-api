import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cursoprogramado, Metacurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { MetacursoRepository } from './metacurso.repository';

export class CursoprogramadoRepository extends DefaultCrudRepository<
  Cursoprogramado,
  typeof Cursoprogramado.prototype.id
  > {

  public readonly metacursos: HasManyRepositoryFactory<
    Metacurso,
    typeof Cursoprogramado.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(MetacursoRepository)
    protected metacursoRepositoryGetter: Getter<MetacursoRepository>,
  ) {
    super(Cursoprogramado, dataSource);
    this.metacursos = this.createHasManyRepositoryFactoryFor(
      'metacursos',
      metacursoRepositoryGetter,
    )
  }
}
