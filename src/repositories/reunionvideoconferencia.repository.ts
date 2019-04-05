import { DefaultCrudRepository, HasOneRepositoryFactory, repository, HasManyRepositoryFactory } from '@loopback/repository';
import { Reunionvideoconferencia, Horariocurso, Ocurrencia } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { HorariocursoRepository } from './horariocurso.repository';
import { OcurrenciaRepository } from './ocurrencia.repository';

export class ReunionvideoconferenciaRepository extends DefaultCrudRepository<
  Reunionvideoconferencia,
  typeof Reunionvideoconferencia.prototype.id
  > {

  public readonly horariocurso: HasOneRepositoryFactory<
    Horariocurso,
    typeof Reunionvideoconferencia.prototype.id
  >;

  public readonly ocurrencias: HasManyRepositoryFactory<
    Ocurrencia,
    typeof Reunionvideoconferencia.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('HorariocursoRepository')
    getHorariocursoRepository: Getter<HorariocursoRepository>,
    @repository.getter(OcurrenciaRepository)
    protected ocurrenciaRepositoryGetter: Getter<OcurrenciaRepository>,
  ) {
    super(Reunionvideoconferencia, dataSource);
    this.horariocurso = this.createHasOneRepositoryFactoryFor(
      'horariocurso',
      getHorariocursoRepository,
    );
    this.ocurrencias = this.createHasManyRepositoryFactoryFor(
      'ocurrencias',
      ocurrenciaRepositoryGetter,
    );
  }
}
