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
import { Cohorte, Contacto } from '../models';
import { CohorteRepository } from '../repositories';

export class CohorteController {
  constructor(
    @repository(CohorteRepository)
    public cohorteRepository: CohorteRepository,
  ) { }

  @post('/cohortes', {
    responses: {
      '200': {
        description: 'Cohorte model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cohorte } } },
      },
    },
  })
  async create(@requestBody() cohorte: Cohorte): Promise<Cohorte> {
    return await this.cohorteRepository.create(cohorte);
  }

  @get('/cohortes/count', {
    responses: {
      '200': {
        description: 'Cohorte model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cohorte)) where?: Where,
  ): Promise<Count> {
    return await this.cohorteRepository.count(where);
  }

  @get('/cohortes', {
    responses: {
      '200': {
        description: 'Array of Cohorte model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Cohorte } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cohorte)) filter?: Filter,
  ): Promise<Cohorte[]> {
    return await this.cohorteRepository.find(filter);
  }

  @patch('/cohortes', {
    responses: {
      '200': {
        description: 'Cohorte PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() cohorte: Cohorte,
    @param.query.object('where', getWhereSchemaFor(Cohorte)) where?: Where,
  ): Promise<Count> {
    return await this.cohorteRepository.updateAll(cohorte, where);
  }

  @get('/cohortes/{id}', {
    responses: {
      '200': {
        description: 'Cohorte model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cohorte } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Cohorte> {
    return await this.cohorteRepository.findById(id);
  }

  @patch('/cohortes/{id}', {
    responses: {
      '204': {
        description: 'Cohorte PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() cohorte: Cohorte,
  ): Promise<void> {
    await this.cohorteRepository.updateById(id, cohorte);
  }

  @put('/cohortes/{id}', {
    responses: {
      '204': {
        description: 'Cohorte PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cohorte: Cohorte,
  ): Promise<void> {
    await this.cohorteRepository.replaceById(id, cohorte);
  }

  @del('/cohortes/{id}', {
    responses: {
      '204': {
        description: 'Cohorte DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cohorteRepository.deleteById(id);
  }

  @get('/cohortes/{id}/contacto')
  async getContacto(
    @param.path.number('id') cohorteId: typeof Cohorte.prototype.id,
  ): Promise<Contacto> {
    return await this.cohorteRepository.contacto(cohorteId);
  }
}
