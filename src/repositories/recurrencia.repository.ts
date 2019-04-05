import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Recurrencia, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { HorariocursoRepository } from './horariocurso.repository';

export class RecurrenciaRepository extends DefaultCrudRepository<
  Recurrencia,
  typeof Recurrencia.prototype.id
  > {

  public readonly horariocursos: HasManyRepositoryFactory<
    Horariocurso,
    typeof Recurrencia.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(HorariocursoRepository)
    protected horariocursoRepositoryGetter: Getter<HorariocursoRepository>,
  ) {
    super(Recurrencia, dataSource);
    this.horariocursos = this.createHasManyRepositoryFactoryFor(
      'horariocursos',
      horariocursoRepositoryGetter,
    );
  }
}
