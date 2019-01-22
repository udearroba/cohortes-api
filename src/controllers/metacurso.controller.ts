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
import { Metacurso, Materia, Cursocohorte, Cohorte } from '../models';
import { MetacursoRepository } from '../repositories';

export class MetacursoController {
  constructor(
    @repository(MetacursoRepository)
    public metacursoRepository: MetacursoRepository,
  ) { }

  @post('/metacursos', {
    responses: {
      '200': {
        description: 'Metacurso model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Metacurso } } },
      },
    },
  })
  async create(@requestBody() metacurso: Metacurso): Promise<Metacurso> {
    return await this.metacursoRepository.create(metacurso);
  }

  @get('/metacursos/count', {
    responses: {
      '200': {
        description: 'Metacurso model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Metacurso)) where?: Where,
  ): Promise<Count> {
    return await this.metacursoRepository.count(where);
  }

  @get('/metacursos', {
    responses: {
      '200': {
        description: 'Array of Metacurso model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Metacurso } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Metacurso)) filter?: Filter,
  ): Promise<Metacurso[]> {
    return await this.metacursoRepository.find(filter);
  }

  @patch('/metacursos', {
    responses: {
      '200': {
        description: 'Metacurso PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() metacurso: Metacurso,
    @param.query.object('where', getWhereSchemaFor(Metacurso)) where?: Where,
  ): Promise<Count> {
    return await this.metacursoRepository.updateAll(metacurso, where);
  }

  @get('/metacursos/{id}', {
    responses: {
      '200': {
        description: 'Metacurso model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Metacurso } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Metacurso> {
    return await this.metacursoRepository.findById(id);
  }

  @patch('/metacursos/{id}', {
    responses: {
      '204': {
        description: 'Metacurso PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() metacurso: Metacurso,
  ): Promise<void> {
    await this.metacursoRepository.updateById(id, metacurso);
  }

  @put('/metacursos/{id}', {
    responses: {
      '204': {
        description: 'Metacurso PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() metacurso: Metacurso,
  ): Promise<void> {
    await this.metacursoRepository.replaceById(id, metacurso);
  }

  @del('/metacursos/{id}', {
    responses: {
      '204': {
        description: 'Metacurso DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.metacursoRepository.deleteById(id);
  }

  @get('/metacursos/{id}/materia')
  async getMateria(
    @param.path.number('id') metacursoId: typeof Metacurso.prototype.id,
  ): Promise<Materia> {
    return await this.metacursoRepository.materia(metacursoId);
  }

  @get('/metacursos/{id}/cohorte')
  async getCohorte(
    @param.path.number('id') metacursoId: typeof Metacurso.prototype.id,
  ): Promise<Cohorte> {
    return await this.metacursoRepository.cohorte(metacursoId);
  }

  @get('/metacursos/{id}/cursocohorte')
  async getCursocohorte(
    @param.path.number('id') metacursoId: typeof Metacurso.prototype.id,
  ): Promise<Cursocohorte> {
    return await this.metacursoRepository.cursocohorte(metacursoId);
  }
}
