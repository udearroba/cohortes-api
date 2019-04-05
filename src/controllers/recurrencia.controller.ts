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
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Recurrencia} from '../models';
import {RecurrenciaRepository} from '../repositories';

export class RecurrenciaController {
  constructor(
    @repository(RecurrenciaRepository)
    public recurrenciaRepository : RecurrenciaRepository,
  ) {}

  @post('/recurrencias', {
    responses: {
      '200': {
        description: 'Recurrencia model instance',
        content: {'application/json': {schema: {'x-ts-type': Recurrencia}}},
      },
    },
  })
  async create(@requestBody() recurrencia: Recurrencia): Promise<Recurrencia> {
    return await this.recurrenciaRepository.create(recurrencia);
  }

  @get('/recurrencias/count', {
    responses: {
      '200': {
        description: 'Recurrencia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Recurrencia)) where?: Where,
  ): Promise<Count> {
    return await this.recurrenciaRepository.count(where);
  }

  @get('/recurrencias', {
    responses: {
      '200': {
        description: 'Array of Recurrencia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Recurrencia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Recurrencia)) filter?: Filter,
  ): Promise<Recurrencia[]> {
    return await this.recurrenciaRepository.find(filter);
  }

  @patch('/recurrencias', {
    responses: {
      '200': {
        description: 'Recurrencia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() recurrencia: Recurrencia,
    @param.query.object('where', getWhereSchemaFor(Recurrencia)) where?: Where,
  ): Promise<Count> {
    return await this.recurrenciaRepository.updateAll(recurrencia, where);
  }

  @get('/recurrencias/{id}', {
    responses: {
      '200': {
        description: 'Recurrencia model instance',
        content: {'application/json': {schema: {'x-ts-type': Recurrencia}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Recurrencia> {
    return await this.recurrenciaRepository.findById(id);
  }

  @patch('/recurrencias/{id}', {
    responses: {
      '204': {
        description: 'Recurrencia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() recurrencia: Recurrencia,
  ): Promise<void> {
    await this.recurrenciaRepository.updateById(id, recurrencia);
  }

  @put('/recurrencias/{id}', {
    responses: {
      '204': {
        description: 'Recurrencia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recurrencia: Recurrencia,
  ): Promise<void> {
    await this.recurrenciaRepository.replaceById(id, recurrencia);
  }

  @del('/recurrencias/{id}', {
    responses: {
      '204': {
        description: 'Recurrencia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recurrenciaRepository.deleteById(id);
  }
}
