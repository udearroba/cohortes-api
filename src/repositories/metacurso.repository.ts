import { DefaultCrudRepository, juggler, BelongsToAccessor, repository } from '@loopback/repository';
import { Metacurso, Materia, Cohorte, Cursocohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { MateriaRepository, CohorteRepository, CursocohorteRepository } from '../repositories';

export class MetacursoRepository extends DefaultCrudRepository<
  Metacurso,
  typeof Metacurso.prototype.id
  > {
  public readonly materia: BelongsToAccessor<
    Materia,
    typeof Metacurso.prototype.id
  >;
  public readonly cohorte: BelongsToAccessor<
    Cohorte,
    typeof Metacurso.prototype.id
  >;
  public readonly cursocohorte: BelongsToAccessor<
    Cursocohorte,
    typeof Metacurso.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('MateriaRepository')
    materiaRepositoryGetter: Getter<MateriaRepository>,
    @repository.getter('CohorteRepository')
    cohorteRepositoryGetter: Getter<CohorteRepository>,
    @repository.getter('CursocohorteRepository')
    cursocohorteRepositoryGetter: Getter<CursocohorteRepository>,
  ) {
    super(Metacurso, dataSource);
    this.materia = this.createBelongsToAccessorFor(
      'materia',
      materiaRepositoryGetter,
    );
    this.cohorte = this.createBelongsToAccessorFor(
      'cohorte',
      cohorteRepositoryGetter,
    );
    this.cursocohorte = this.createBelongsToAccessorFor(
      'cursocohorte',
      cursocohorteRepositoryGetter,
    );
  }
}
