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
import {Reunionvideoconferencia} from '../models';
import {ReunionvideoconferenciaRepository} from '../repositories';

export class ReunionvideoconferenciaController {
  constructor(
    @repository(ReunionvideoconferenciaRepository)
    public reunionvideoconferenciaRepository : ReunionvideoconferenciaRepository,
  ) {}

  @post('/reunionvideoconferencias', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia model instance',
        content: {'application/json': {schema: {'x-ts-type': Reunionvideoconferencia}}},
      },
    },
  })
  async create(@requestBody() reunionvideoconferencia: Reunionvideoconferencia): Promise<Reunionvideoconferencia> {
    return await this.reunionvideoconferenciaRepository.create(reunionvideoconferencia);
  }

  @get('/reunionvideoconferencias/count', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reunionvideoconferencia)) where?: Where,
  ): Promise<Count> {
    return await this.reunionvideoconferenciaRepository.count(where);
  }

  @get('/reunionvideoconferencias', {
    responses: {
      '200': {
        description: 'Array of Reunionvideoconferencia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Reunionvideoconferencia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reunionvideoconferencia)) filter?: Filter,
  ): Promise<Reunionvideoconferencia[]> {
    return await this.reunionvideoconferenciaRepository.find(filter);
  }

  @patch('/reunionvideoconferencias', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() reunionvideoconferencia: Reunionvideoconferencia,
    @param.query.object('where', getWhereSchemaFor(Reunionvideoconferencia)) where?: Where,
  ): Promise<Count> {
    return await this.reunionvideoconferenciaRepository.updateAll(reunionvideoconferencia, where);
  }

  @get('/reunionvideoconferencias/{id}', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia model instance',
        content: {'application/json': {schema: {'x-ts-type': Reunionvideoconferencia}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Reunionvideoconferencia> {
    return await this.reunionvideoconferenciaRepository.findById(id);
  }

  @patch('/reunionvideoconferencias/{id}', {
    responses: {
      '204': {
        description: 'Reunionvideoconferencia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() reunionvideoconferencia: Reunionvideoconferencia,
  ): Promise<void> {
    await this.reunionvideoconferenciaRepository.updateById(id, reunionvideoconferencia);
  }

  @put('/reunionvideoconferencias/{id}', {
    responses: {
      '204': {
        description: 'Reunionvideoconferencia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reunionvideoconferencia: Reunionvideoconferencia,
  ): Promise<void> {
    await this.reunionvideoconferenciaRepository.replaceById(id, reunionvideoconferencia);
  }

  @del('/reunionvideoconferencias/{id}', {
    responses: {
      '204': {
        description: 'Reunionvideoconferencia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reunionvideoconferenciaRepository.deleteById(id);
  }
}
