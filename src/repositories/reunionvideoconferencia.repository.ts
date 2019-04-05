import { DefaultCrudRepository, HasOneRepositoryFactory, repository } from '@loopback/repository';
import { Reunionvideoconferencia, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { HorariocursoRepository } from './horariocurso.repository';

export class ReunionvideoconferenciaRepository extends DefaultCrudRepository<
  Reunionvideoconferencia,
  typeof Reunionvideoconferencia.prototype.id
  > {

  public readonly horariocurso: HasOneRepositoryFactory<
    Horariocurso,
    typeof Reunionvideoconferencia.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('HorariocursoRepository')
    getHorariocursoRepository: Getter<HorariocursoRepository>,
  ) {
    super(Reunionvideoconferencia, dataSource);
    this.horariocurso = this.createHasOneRepositoryFactoryFor(
      'horariocurso',
      getHorariocursoRepository,
    );
  }
}
