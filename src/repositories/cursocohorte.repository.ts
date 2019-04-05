import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cursocohorte, Metacurso, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { MetacursoRepository } from './metacurso.repository';
import { HorariocursoRepository } from './horariocurso.repository';

export class CursocohorteRepository extends DefaultCrudRepository<
  Cursocohorte,
  typeof Cursocohorte.prototype.id
  > {

  public readonly metacursos: HasManyRepositoryFactory<
    Metacurso,
    typeof Cursocohorte.prototype.id
  >;

  public readonly horariocursos: HasManyRepositoryFactory<
    Horariocurso,
    typeof Cursocohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(MetacursoRepository)
    protected metacursoRepositoryGetter: Getter<MetacursoRepository>,
    @repository.getter(HorariocursoRepository)
    protected horariocursoRepositoryGetter: Getter<HorariocursoRepository>,
  ) {
    super(Cursocohorte, dataSource);
    this.metacursos = this.createHasManyRepositoryFactoryFor(
      'metacursos',
      metacursoRepositoryGetter,
    );
    this.horariocursos = this.createHasManyRepositoryFactoryFor(
      'horariocursos',
      horariocursoRepositoryGetter,
    );
  }
}
