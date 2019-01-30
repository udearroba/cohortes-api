import { DefaultCrudRepository, juggler, BelongsToAccessor, repository } from '@loopback/repository';
import { Metacurso, Cursoprogramado, Cursocohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CursoprogramadoRepository, CohorteRepository, CursocohorteRepository } from '../repositories';

export class MetacursoRepository extends DefaultCrudRepository<
  Metacurso,
  typeof Metacurso.prototype.id
  > {
  public readonly cursoprogramado: BelongsToAccessor<
    Cursoprogramado,
    typeof Metacurso.prototype.id
  >;
  public readonly cursocohorte: BelongsToAccessor<
    Cursocohorte,
    typeof Metacurso.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('CursoprogramadoRepository')
    cursoprogramadoRepositoryGetter: Getter<CursoprogramadoRepository>,
    @repository.getter('CursocohorteRepository')
    cursocohorteRepositoryGetter: Getter<CursocohorteRepository>,
  ) {
    super(Metacurso, dataSource);
    this.cursoprogramado = this.createBelongsToAccessorFor(
      'cursoprogramado',
      cursoprogramadoRepositoryGetter,
    );
    this.cursocohorte = this.createBelongsToAccessorFor(
      'cursocohorte',
      cursocohorteRepositoryGetter,
    );
  }
}
