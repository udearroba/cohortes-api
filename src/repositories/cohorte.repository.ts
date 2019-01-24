import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Cohorte, Cursoprogramado, Cursocohorte, Horariocurso } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { CursoprogramadoRepository, CursocohorteRepository, HorariocursoRepository } from '../repositories';
import { inject, Getter } from '@loopback/core';

export class CohorteRepository extends DefaultCrudRepository<
  Cohorte,
  typeof Cohorte.prototype.id
  > {
  public readonly cursoprogramados: HasManyRepositoryFactory<
    Cursoprogramado,
    typeof Cohorte.prototype.id
  >;
  public readonly cursocohortes: HasManyRepositoryFactory<
    Cursocohorte,
    typeof Cohorte.prototype.id
  >;
  public readonly horariocursos: HasManyRepositoryFactory<
    Horariocurso,
    typeof Cohorte.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('CursoprogramadoRepository')
    getCursoprogramadoRepository: Getter<CursoprogramadoRepository>,
    @repository.getter('CursocohorteRepository')
    getCursocohorteRepository: Getter<CursocohorteRepository>,
    @repository.getter('HorariocursoRepository')
    getHorariocursoRepository: Getter<HorariocursoRepository>,
  ) {
    super(Cohorte, dataSource);
    this.cursoprogramados = this.createHasManyRepositoryFactoryFor(
      'cursoprogramados',
      getCursoprogramadoRepository,
    );
    this.cursocohortes = this.createHasManyRepositoryFactoryFor(
      'cursocohortes',
      getCursocohorteRepository,
    );
    this.horariocursos = this.createHasManyRepositoryFactoryFor(
      'horariocursos',
      getHorariocursoRepository,
    );
  }
}
