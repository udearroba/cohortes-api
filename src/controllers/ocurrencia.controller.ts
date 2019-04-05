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
import {Ocurrencia} from '../models';
import {OcurrenciaRepository} from '../repositories';

export class OcurrenciaController {
  constructor(
    @repository(OcurrenciaRepository)
    public ocurrenciaRepository : OcurrenciaRepository,
  ) {}

  @post('/ocurrencias', {
    responses: {
      '200': {
        description: 'Ocurrencia model instance',
        content: {'application/json': {schema: {'x-ts-type': Ocurrencia}}},
      },
    },
  })
  async create(@requestBody() ocurrencia: Ocurrencia): Promise<Ocurrencia> {
    return await this.ocurrenciaRepository.create(ocurrencia);
  }

  @get('/ocurrencias/count', {
    responses: {
      '200': {
        description: 'Ocurrencia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ocurrencia)) where?: Where,
  ): Promise<Count> {
    return await this.ocurrenciaRepository.count(where);
  }

  @get('/ocurrencias', {
    responses: {
      '200': {
        description: 'Array of Ocurrencia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Ocurrencia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ocurrencia)) filter?: Filter,
  ): Promise<Ocurrencia[]> {
    return await this.ocurrenciaRepository.find(filter);
  }

  @patch('/ocurrencias', {
    responses: {
      '200': {
        description: 'Ocurrencia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() ocurrencia: Ocurrencia,
    @param.query.object('where', getWhereSchemaFor(Ocurrencia)) where?: Where,
  ): Promise<Count> {
    return await this.ocurrenciaRepository.updateAll(ocurrencia, where);
  }

  @get('/ocurrencias/{id}', {
    responses: {
      '200': {
        description: 'Ocurrencia model instance',
        content: {'application/json': {schema: {'x-ts-type': Ocurrencia}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Ocurrencia> {
    return await this.ocurrenciaRepository.findById(id);
  }

  @patch('/ocurrencias/{id}', {
    responses: {
      '204': {
        description: 'Ocurrencia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() ocurrencia: Ocurrencia,
  ): Promise<void> {
    await this.ocurrenciaRepository.updateById(id, ocurrencia);
  }

  @put('/ocurrencias/{id}', {
    responses: {
      '204': {
        description: 'Ocurrencia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ocurrencia: Ocurrencia,
  ): Promise<void> {
    await this.ocurrenciaRepository.replaceById(id, ocurrencia);
  }

  @del('/ocurrencias/{id}', {
    responses: {
      '204': {
        description: 'Ocurrencia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ocurrenciaRepository.deleteById(id);
  }
}
