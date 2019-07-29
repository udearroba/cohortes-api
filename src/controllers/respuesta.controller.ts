import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Respuesta} from '../models';
import {RespuestaRepository} from '../repositories';

export class RespuestaController {
  constructor(
    @repository(RespuestaRepository)
    public respuestaRepository : RespuestaRepository,
  ) {}

  @post('/respuestas', {
    responses: {
      '200': {
        description: 'Respuesta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Respuesta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Respuesta, {exclude: ['id']}),
        },
      },
    })
    respuesta: Omit<Respuesta, 'id'>,
  ): Promise<Respuesta> {
    return await this.respuestaRepository.create(respuesta);
  }

  @get('/respuestas/count', {
    responses: {
      '200': {
        description: 'Respuesta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Respuesta)) where?: Where<Respuesta>,
  ): Promise<Count> {
    return await this.respuestaRepository.count(where);
  }

  @get('/respuestas', {
    responses: {
      '200': {
        description: 'Array of Respuesta model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Respuesta)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Respuesta)) filter?: Filter<Respuesta>,
  ): Promise<Respuesta[]> {
    return await this.respuestaRepository.find(filter);
  }

  @patch('/respuestas', {
    responses: {
      '200': {
        description: 'Respuesta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Respuesta, {partial: true}),
        },
      },
    })
    respuesta: Respuesta,
    @param.query.object('where', getWhereSchemaFor(Respuesta)) where?: Where<Respuesta>,
  ): Promise<Count> {
    return await this.respuestaRepository.updateAll(respuesta, where);
  }

  @get('/respuestas/{id}', {
    responses: {
      '200': {
        description: 'Respuesta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Respuesta)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Respuesta> {
    return await this.respuestaRepository.findById(id);
  }

  @patch('/respuestas/{id}', {
    responses: {
      '204': {
        description: 'Respuesta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Respuesta, {partial: true}),
        },
      },
    })
    respuesta: Respuesta,
  ): Promise<void> {
    await this.respuestaRepository.updateById(id, respuesta);
  }

  @put('/respuestas/{id}', {
    responses: {
      '204': {
        description: 'Respuesta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() respuesta: Respuesta,
  ): Promise<void> {
    await this.respuestaRepository.replaceById(id, respuesta);
  }

  @del('/respuestas/{id}', {
    responses: {
      '204': {
        description: 'Respuesta DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.respuestaRepository.deleteById(id);
  }
}
