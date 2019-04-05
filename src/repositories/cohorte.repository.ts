import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cohorte, Cursoprogramado, Cursocohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { CursoprogramadoRepository } from './cursoprogramado.repository';
import { CursocohorteRepository } from './cursocohorte.repository';

export class CohorteRepository extends DefaultCrudRepository<
  Cohorte,
  typeof Cohorte.prototype.id
  > {

  public readonly cursosprogramados: HasManyRepositoryFactory<
    Cursoprogramado,
    typeof Cohorte.prototype.id
  >;
  public readonly cursoscohortes: HasManyRepositoryFactory<
    Cursocohorte,
    typeof Cohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter(CursoprogramadoRepository)
    protected cursoprogramadoRepositoryGetter: Getter<CursoprogramadoRepository>,
    @repository.getter(CursocohorteRepository)
    protected cursocohorteRepositoryGetter: Getter<CursocohorteRepository>,
  ) {
    super(Cohorte, dataSource);
    this.cursosprogramados = this.createHasManyRepositoryFactoryFor(
      'cursosprogramados',
      cursoprogramadoRepositoryGetter,
    );
    this.cursoscohortes = this.createHasManyRepositoryFactoryFor(
      'cursoscohortes',
      cursocohorteRepositoryGetter,
    );
  }
}
