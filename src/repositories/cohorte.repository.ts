import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cohorte, Metacurso, Cursocohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { MetacursoRepository, CursocohorteRepository } from '../repositories';
import { inject, Getter } from '@loopback/core';

export class CohorteRepository extends DefaultCrudRepository<
  Cohorte,
  typeof Cohorte.prototype.id
  > {
  public readonly metacursos: HasManyRepositoryFactory<
    Metacurso,
    typeof Cohorte.prototype.id
  >;
  public readonly cursocohortes: HasManyRepositoryFactory<
    Cursocohorte,
    typeof Cohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('MetacursoRepository')
    getMetacursoRepository: Getter<MetacursoRepository>,
    @repository.getter('CursocohorteRepository')
    getCursocohorteRepository: Getter<CursocohorteRepository>,
  ) {
    super(Cohorte, dataSource);
    this.metacursos = this.createHasManyRepositoryFactoryFor(
      'metacursos',
      getMetacursoRepository,
    );
    this.cursocohortes = this.createHasManyRepositoryFactoryFor(
      'cursocohortes',
      getCursocohorteRepository,
    );
  }
}
