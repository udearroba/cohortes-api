import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Contacto, Cohorte, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CohorteRepository } from './cohorte.repository';
import { HorariocursoRepository } from './horariocurso.repository';

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
    typeof Contacto.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(CohorteRepository)
    protected cohorteRepositoryGetter: Getter<CohorteRepository>,
    @repository.getter(HorariocursoRepository)
    protected horariocursoRepositoryGetter: Getter<HorariocursoRepository>,
  ) {
    super(Contacto, dataSource);
    this.cohortes = this.createHasManyRepositoryFactoryFor(
      'cohortes',
      cohorteRepositoryGetter,
    );
    this.horariocursos = this.createHasManyRepositoryFactoryFor(
      'horariocursos',
      horariocursoRepositoryGetter,
    );
  }
}
