import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Formulario, FormularioRelations, Respuesta} from '../models';
import {CohortesdsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RespuestaRepository} from './respuesta.repository';

export class FormularioRepository extends DefaultCrudRepository<
  Formulario,
  typeof Formulario.prototype.id,
  FormularioRelations
> {

  public readonly respuestas: HasManyRepositoryFactory<Respuesta, typeof Formulario.prototype.id>;

  constructor(
    @inject('datasources.cohortesds') dataSource: CohortesdsDataSource, @repository.getter('RespuestaRepository') protected respuestaRepositoryGetter: Getter<RespuestaRepository>,
  ) {
    super(Formulario, dataSource);
    this.respuestas = this.createHasManyRepositoryFactoryFor('respuestas', respuestaRepositoryGetter,);
  }
}
