import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cursocohorte, Metacurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { MetacursoRepository } from './metacurso.repository';

export class CursocohorteRepository extends DefaultCrudRepository<
  Cursocohorte,
  typeof Cursocohorte.prototype.id
  > {

  public readonly metacursos: HasManyRepositoryFactory<
    Metacurso,
    typeof Cursocohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(MetacursoRepository)
    protected metacursoRepositoryGetter: Getter<MetacursoRepository>,
  ) {
    super(Cursocohorte, dataSource);
    this.metacursos = this.createHasManyRepositoryFactoryFor(
      'metacursos',
      metacursoRepositoryGetter,
    )
  }
}
