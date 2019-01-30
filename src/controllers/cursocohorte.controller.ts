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
import { Cursocohorte, Cohorte } from '../models';
import { CursocohorteRepository } from '../repositories';

export class CursocohorteController {
  constructor(
    @repository(CursocohorteRepository)
    public cursocohorteRepository: CursocohorteRepository,
  ) { }

  @post('/cursocohortes', {
    responses: {
      '200': {
        description: 'Cursocohorte model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cursocohorte } } },
      },
    },
  })
  async create(@requestBody() cursocohorte: Cursocohorte): Promise<Cursocohorte> {
    return await this.cursocohorteRepository.create(cursocohorte);
  }

  @get('/cursocohortes/count', {
    responses: {
      '200': {
        description: 'Cursocohorte model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cursocohorte)) where?: Where,
  ): Promise<Count> {
    return await this.cursocohorteRepository.count(where);
  }

  @get('/cursocohortes', {
    responses: {
      '200': {
        description: 'Array of Cursocohorte model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Cursocohorte } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cursocohorte)) filter?: Filter,
  ): Promise<Cursocohorte[]> {
    return await this.cursocohorteRepository.find(filter);
  }

  @patch('/cursocohortes', {
    responses: {
      '200': {
        description: 'Cursocohorte PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() cursocohorte: Cursocohorte,
    @param.query.object('where', getWhereSchemaFor(Cursocohorte)) where?: Where,
  ): Promise<Count> {
    return await this.cursocohorteRepository.updateAll(cursocohorte, where);
  }

  @get('/cursocohortes/{id}', {
    responses: {
      '200': {
        description: 'Cursocohorte model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cursocohorte } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Cursocohorte> {
    return await this.cursocohorteRepository.findById(id);
  }

  @patch('/cursocohortes/{id}', {
    responses: {
      '204': {
        description: 'Cursocohorte PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() cursocohorte: Cursocohorte,
  ): Promise<void> {
    await this.cursocohorteRepository.updateById(id, cursocohorte);
  }

  @put('/cursocohortes/{id}', {
    responses: {
      '204': {
        description: 'Cursocohorte PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cursocohorte: Cursocohorte,
  ): Promise<void> {
    await this.cursocohorteRepository.replaceById(id, cursocohorte);
  }

  @del('/cursocohortes/{id}', {
    responses: {
      '204': {
        description: 'Cursocohorte DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cursocohorteRepository.deleteById(id);
  }

  @get('/cursocohortes/{id}/cohorte')
  async getCohorte(
    @param.path.number('id') cursocohorteId: typeof Cursocohorte.prototype.id,
  ): Promise<Cohorte> {
    return await this.cursocohorteRepository.cohorte(cursocohorteId);
  }
}
