import { DefaultCrudRepository, juggler, BelongsToAccessor } from '@loopback/repository';
import { Horariocurso, Cohorte, Contacto, Recurrencia, Cursocohorte } from '../models';
import { CohortesdsDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class HorariocursoRepository extends DefaultCrudRepository<
  Horariocurso,
  typeof Horariocurso.prototype.id
  > {
  public readonly cohorte: BelongsToAccessor<
    Cohorte,
    typeof Horariocurso.prototype.id
  >;
  public readonly contacto: BelongsToAccessor<
    Contacto,
    typeof Horariocurso.prototype.id
  >;
  public readonly recurrencia: BelongsToAccessor<
    Recurrencia,
    typeof Horariocurso.prototype.id
  >;
  public readonly cursocohorte: BelongsToAccessor<
    Cursocohorte,
    typeof Horariocurso.prototype.id
  >;

  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource,
  ) {
    super(Horariocurso, dataSource);
  }
}
