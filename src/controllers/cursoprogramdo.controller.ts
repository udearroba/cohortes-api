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
import { Cursoprogramado, Materia, Cohorte } from '../models';
import { CursoprogramadoRepository } from '../repositories';

export class CursoprogramdoController {
  constructor(
    @repository(CursoprogramadoRepository)
    public cursoprogramadoRepository: CursoprogramadoRepository,
  ) { }

  @post('/cursoprogramados', {
    responses: {
      '200': {
        description: 'Cursoprogramado model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cursoprogramado } } },
      },
    },
  })
  async create(@requestBody() cursoprogramado: Cursoprogramado): Promise<Cursoprogramado> {
    return await this.cursoprogramadoRepository.create(cursoprogramado);
  }

  @get('/cursoprogramados/count', {
    responses: {
      '200': {
        description: 'Cursoprogramado model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cursoprogramado)) where?: Where,
  ): Promise<Count> {
    return await this.cursoprogramadoRepository.count(where);
  }

  @get('/cursoprogramados', {
    responses: {
      '200': {
        description: 'Array of Cursoprogramado model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Cursoprogramado } },
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

  @patch('/cursoprogramados', {
    responses: {
      '200': {
        description: 'Cursoprogramado PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() cursoprogramado: Cursoprogramado,
    @param.query.object('where', getWhereSchemaFor(Cursoprogramado)) where?: Where,
  ): Promise<Count> {
    return await this.cursoprogramadoRepository.updateAll(cursoprogramado, where);
  }

  @get('/cursoprogramados/{id}', {
    responses: {
      '200': {
        description: 'Cursoprogramado model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cursoprogramado } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Cursoprogramado> {
    return await this.cursoprogramadoRepository.findById(id);
  }

  @patch('/cursoprogramados/{id}', {
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

  @put('/cursoprogramados/{id}', {
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

  @del('/cursoprogramados/{id}', {
    responses: {
      '204': {
        description: 'Cursoprogramado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cursoprogramadoRepository.deleteById(id);
  }

  @get('/cursoprogramados/{id}/materia')
  async getMateria(
    @param.path.number('id') cursoprogramadoId: typeof Cursoprogramado.prototype.id,
  ): Promise<Materia> {
    return await this.cursoprogramadoRepository.materia(cursoprogramadoId);
  }

  @get('/cursoprogramados/{id}/cohorte')
  async getCohorte(
    @param.path.number('id') cursoprogramadoId: typeof Cursoprogramado.prototype.id,
  ): Promise<Cohorte> {
    return await this.cursoprogramadoRepository.cohorte(cursoprogramadoId);
  }
}
