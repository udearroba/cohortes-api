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
import {Grabacion} from '../models';
import {GrabacionRepository} from '../repositories';

export class GrabacionController {
  constructor(
    @repository(GrabacionRepository)
    public grabacionRepository : GrabacionRepository,
  ) {}

  @post('/grabaciones', {
    responses: {
      '200': {
        description: 'Grabacion model instance',
        content: {'application/json': {schema: {'x-ts-type': Grabacion}}},
      },
    },
  })
  async create(@requestBody() grabacion: Grabacion): Promise<Grabacion> {
    return await this.grabacionRepository.create(grabacion);
  }

  @get('/grabaciones/count', {
    responses: {
      '200': {
        description: 'Grabacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Grabacion)) where?: Where,
  ): Promise<Count> {
    return await this.grabacionRepository.count(where);
  }

  @get('/grabaciones', {
    responses: {
      '200': {
        description: 'Array of Grabacion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Grabacion}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Grabacion)) filter?: Filter,
  ): Promise<Grabacion[]> {
    return await this.grabacionRepository.find(filter);
  }

  @patch('/grabaciones', {
    responses: {
      '200': {
        description: 'Grabacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() grabacion: Grabacion,
    @param.query.object('where', getWhereSchemaFor(Grabacion)) where?: Where,
  ): Promise<Count> {
    return await this.grabacionRepository.updateAll(grabacion, where);
  }

  @get('/grabaciones/{id}', {
    responses: {
      '200': {
        description: 'Grabacion model instance',
        content: {'application/json': {schema: {'x-ts-type': Grabacion}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Grabacion> {
    return await this.grabacionRepository.findById(id);
  }

  @patch('/grabaciones/{id}', {
    responses: {
      '204': {
        description: 'Grabacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() grabacion: Grabacion,
  ): Promise<void> {
    await this.grabacionRepository.updateById(id, grabacion);
  }

  @put('/grabaciones/{id}', {
    responses: {
      '204': {
        description: 'Grabacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() grabacion: Grabacion,
  ): Promise<void> {
    await this.grabacionRepository.replaceById(id, grabacion);
  }

  @del('/grabaciones/{id}', {
    responses: {
      '204': {
        description: 'Grabacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.grabacionRepository.deleteById(id);
  }
}
