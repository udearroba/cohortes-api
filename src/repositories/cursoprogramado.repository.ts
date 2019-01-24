import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository, BelongsToAccessor } from '@loopback/repository';
import { Cursoprogramado, Metacurso, Cohorte, Materia } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { MetacursoRepository, CohorteRepository, MateriaRepository } from '../repositories';
import { inject, Getter } from '@loopback/core';

export class CursoprogramadoRepository extends DefaultCrudRepository<
  Cursoprogramado,
  typeof Cursoprogramado.prototype.id
  > {
  public readonly metacursos: HasManyRepositoryFactory<
    Metacurso,
    typeof Cursoprogramado.prototype.id
  >;
  public readonly cohorte: BelongsToAccessor<
    Cohorte,
    typeof Cursoprogramado.prototype.id
  >;
  public readonly materia: BelongsToAccessor<
    Materia,
    typeof Cursoprogramado.prototype.id
  >;
  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
    @repository.getter('MetacursoRepository')
    getMetacursoRepository: Getter<MetacursoRepository>,
    @repository.getter('CohorteRepository')
    cohorteRepositoryGetter: Getter<CohorteRepository>,
    @repository.getter('MateriaRepository')
    materiaRepositoryGetter: Getter<MateriaRepository>,
  ) {
    super(Cursoprogramado, dataSource);
    this.metacursos = this.createHasManyRepositoryFactoryFor(
      'metacursos',
      getMetacursoRepository,
    );
    this.cohorte = this.createBelongsToAccessorFor(
      'cohorte',
      cohorteRepositoryGetter,
    );
    this.materia = this.createBelongsToAccessorFor(
      'materia',
      materiaRepositoryGetter,
    );
  }
}
