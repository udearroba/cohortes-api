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
import {Cursoprogramado} from '../models';
import {CursoprogramadoRepository} from '../repositories';

export class CursoprogramadoController {
  constructor(
    @repository(CursoprogramadoRepository)
    public cursoprogramadoRepository : CursoprogramadoRepository,
  ) {}

  @post('/cursosprogramados', {
    responses: {
      '200': {
        description: 'Cursoprogramado model instance',
        content: {'application/json': {schema: {'x-ts-type': Cursoprogramado}}},
      },
    },
  })
  async create(@requestBody() cursoprogramado: Cursoprogramado): Promise<Cursoprogramado> {
    return await this.cursoprogramadoRepository.create(cursoprogramado);
  }

  @get('/cursosprogramados/count', {
    responses: {
      '200': {
        description: 'Cursoprogramado model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cursoprogramado)) where?: Where,
  ): Promise<Count> {
    return await this.cursoprogramadoRepository.count(where);
  }

  @get('/cursosprogramados', {
    responses: {
      '200': {
        description: 'Array of Cursoprogramado model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Cursoprogramado}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cursoprogramado)) filter?: Filter,
  ): Promise<Cursoprogramado[]> {
    return await this.cursoprogramadoRepository.find(filter);
  }

  @patch('/cursosprogramados', {
    responses: {
      '200': {
        description: 'Cursoprogramado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() cursoprogramado: Cursoprogramado,
    @param.query.object('where', getWhereSchemaFor(Cursoprogramado)) where?: Where,
  ): Promise<Count> {
    return await this.cursoprogramadoRepository.updateAll(cursoprogramado, where);
  }

  @get('/cursosprogramados/{id}', {
    responses: {
      '200': {
        description: 'Cursoprogramado model instance',
        content: {'application/json': {schema: {'x-ts-type': Cursoprogramado}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Cursoprogramado> {
    return await this.cursoprogramadoRepository.findById(id);
  }

  @patch('/cursosprogramados/{id}', {
    responses: {
      '204': {
        description: 'Cursoprogramado PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() cursoprogramado: Cursoprogramado,
  ): Promise<void> {
    await this.cursoprogramadoRepository.updateById(id, cursoprogramado);
  }

  @put('/cursosprogramados/{id}', {
    responses: {
      '204': {
        description: 'Cursoprogramado PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cursoprogramado: Cursoprogramado,
  ): Promise<void> {
    await this.cursoprogramadoRepository.replaceById(id, cursoprogramado);
  }

  @del('/cursosprogramados/{id}', {
    responses: {
      '204': {
        description: 'Cursoprogramado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cursoprogramadoRepository.deleteById(id);
  }
}
