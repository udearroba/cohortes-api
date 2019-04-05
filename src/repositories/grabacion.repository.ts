import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Grabacion, Archivo } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { ArchivoRepository } from './archivo.repository';

export class GrabacionRepository extends DefaultCrudRepository<
  Grabacion,
  typeof Grabacion.prototype.id
  > {

  public readonly archivos: HasManyRepositoryFactory<
    Archivo,
    typeof Grabacion.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(ArchivoRepository)
    protected archivoRepositoryGetter: Getter<ArchivoRepository>,
  ) {
    super(Grabacion, dataSource);
    this.archivos = this.createHasManyRepositoryFactoryFor(
      'archivos',
      archivoRepositoryGetter,
    );
  }
}
