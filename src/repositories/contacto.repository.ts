import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Contacto, Cohorte, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { CohorteRepository, HorariocursoRepository } from '../repositories';
import { inject, Getter } from '@loopback/core';

export class ContactoRepository extends DefaultCrudRepository<
  Contacto,
  typeof Contacto.prototype.id
  > {
  public readonly cohortes: HasManyRepositoryFactory<
    Cohorte,
    typeof Contacto.prototype.id
  >;
  public readonly horariocursos: HasManyRepositoryFactory<
    Horariocurso,
    typeof Cohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('CohorteRepository')
    getCohorteRepository: Getter<CohorteRepository>,
    @repository.getter('HorariocursoRepository')
    getHorariocursoRepository: Getter<HorariocursoRepository>,
  ) {
    super(Contacto, dataSource);
    this.cohortes = this.createHasManyRepositoryFactoryFor(
      'cohortes',
      getCohorteRepository,
    );
    this.horariocursos = this.createHasManyRepositoryFactoryFor(
      'horariocursos',
      getHorariocursoRepository,
    );
  }
}
