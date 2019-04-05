import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Ocurrencia, Grabacion } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { GrabacionRepository } from './grabacion.repository';

export class OcurrenciaRepository extends DefaultCrudRepository<
  Ocurrencia,
  typeof Ocurrencia.prototype.id
  > {

  public readonly grabaciones: HasManyRepositoryFactory<
    Grabacion,
    typeof Ocurrencia.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(GrabacionRepository)
    protected grabacionRepositoryGetter: Getter<GrabacionRepository>,
  ) {
    super(Ocurrencia, dataSource);
    this.grabaciones = this.createHasManyRepositoryFactoryFor(
      'grabaciones',
      grabacionRepositoryGetter
    );
  }
}
