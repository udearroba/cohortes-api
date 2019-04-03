import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Contacto, Cohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CohorteRepository } from './cohorte.repository';

export class ContactoRepository extends DefaultCrudRepository<
  Contacto,
  typeof Contacto.prototype.id
  > {

  public readonly cohortes: HasManyRepositoryFactory<
    Cohorte,
    typeof Contacto.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(CohorteRepository)
    protected cohorteRepositoryGetter: Getter<CohorteRepository>,
  ) {
    super(Contacto, dataSource);
    this.cohortes = this.createHasManyRepositoryFactoryFor(
      'cohortes',
      cohorteRepositoryGetter,
    )
  }
}
