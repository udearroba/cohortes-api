import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository, BelongsToAccessor } from '@loopback/repository';
import { Cursocohorte, Metacurso, Horariocurso, Cohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { MetacursoRepository, HorariocursoRepository, CohorteRepository } from '../repositories';
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
  public readonly cohorte: BelongsToAccessor<
    Cohorte,
    typeof Cursocohorte.prototype.id
  >;

  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('MetacursoRepository')
    getMetacursoRepository: Getter<MetacursoRepository>,
    @repository.getter('HorariocursoRepository')
    getHorariocursoRepository: Getter<HorariocursoRepository>,
    @repository.getter('CohorteRepository')
    cohorteRepositoryGetter: Getter<CohorteRepository>,

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
    this.cohorte = this.createBelongsToAccessorFor(
      'cohorte',
      cohorteRepositoryGetter,
    );
  }
}
