import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository, BelongsToAccessor } from '@loopback/repository';
import { Cohorte, Cursoprogramado, Cursocohorte, Horariocurso, Contacto } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { CursoprogramadoRepository, CursocohorteRepository, HorariocursoRepository, ContactoRepository } from '../repositories';
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
  public readonly contacto: BelongsToAccessor<
    Contacto,
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
    @repository.getter('ContactoRepository')
    contactoRepositoryGetter: Getter<ContactoRepository>,
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
    this.contacto = this.createBelongsToAccessorFor(
      'contacto',
      contactoRepositoryGetter,
    );
  }
}
