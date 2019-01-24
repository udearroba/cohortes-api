import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cursocohorte, Metacurso, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { MetacursoRepository, HorariocursoRepository } from '../repositories';
import { inject, Getter } from '@loopback/core';

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
    @repository.getter('MetacursoRepository')
    getMetacursoRepository: Getter<MetacursoRepository>,
    @repository.getter('HorariocursoRepository')
    getHorariocursoRepository: Getter<HorariocursoRepository>,

  ) {
    super(Cursocohorte, dataSource);
    this.metacursos = this.createHasManyRepositoryFactoryFor(
      'metacursos',
      getMetacursoRepository,
    );
    this.horariocursos = this.createHasManyRepositoryFactoryFor(
      'horariocursos',
      getHorariocursoRepository,
    );
  }
}
