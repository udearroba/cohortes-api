import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Formulario,
  Respuesta,
} from '../models';
import {FormularioRepository} from '../repositories';

export class FormularioRespuestaController {
  constructor(
    @repository(FormularioRepository) protected formularioRepository: FormularioRepository,
  ) { }

  @get('/formularios/{id}/respuestas', {
    responses: {
      '200': {
        description: 'Array of Respuesta\'s belonging to Formulario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Respuesta)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Respuesta>,
  ): Promise<Respuesta[]> {
    return await this.formularioRepository.respuestas(id).find(filter);
  }

/**  @post('/formularios/{id}/respuestas', {
    responses: {
      '200': {
        description: 'Formulario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Respuesta)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Formulario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Respuesta, {exclude: ['id']}),
        },
      },
    }) respuesta: Omit<Respuesta, 'id'>,
  ): Promise<Respuesta> {
    return await this.formularioRepository.respuestas(id).create(respuesta);
  }

  @patch('/formularios/{id}/respuestas', {
    responses: {
      '200': {
        description: 'Formulario.Respuesta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Respuesta, {partial: true}),
        },
      },
    })
    respuesta: Partial<Respuesta>,
    @param.query.object('where', getWhereSchemaFor(Respuesta)) where?: Where<Respuesta>,
  ): Promise<Count> {
    return await this.formularioRepository.respuestas(id).patch(respuesta, where);
  }

  @del('/formularios/{id}/respuestas', {
    responses: {
      '200': {
        description: 'Formulario.Respuesta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Respuesta)) where?: Where<Respuesta>,
  ): Promise<Count> {
    return await this.formularioRepository.respuestas(id).delete(where);
  }**/
}
