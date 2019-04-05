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
import {Horariocurso} from '../models';
import {HorariocursoRepository} from '../repositories';

export class HorariocursoController {
  constructor(
    @repository(HorariocursoRepository)
    public horariocursoRepository : HorariocursoRepository,
  ) {}

  @post('/horariocursos', {
    responses: {
      '200': {
        description: 'Horariocurso model instance',
        content: {'application/json': {schema: {'x-ts-type': Horariocurso}}},
      },
    },
  })
  async create(@requestBody() horariocurso: Horariocurso): Promise<Horariocurso> {
    return await this.horariocursoRepository.create(horariocurso);
  }

  @get('/horariocursos/count', {
    responses: {
      '200': {
        description: 'Horariocurso model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Horariocurso)) where?: Where,
  ): Promise<Count> {
    return await this.horariocursoRepository.count(where);
  }

  @get('/horariocursos', {
    responses: {
      '200': {
        description: 'Array of Horariocurso model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Horariocurso}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Horariocurso)) filter?: Filter,
  ): Promise<Horariocurso[]> {
    return await this.horariocursoRepository.find(filter);
  }

  @patch('/horariocursos', {
    responses: {
      '200': {
        description: 'Horariocurso PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() horariocurso: Horariocurso,
    @param.query.object('where', getWhereSchemaFor(Horariocurso)) where?: Where,
  ): Promise<Count> {
    return await this.horariocursoRepository.updateAll(horariocurso, where);
  }

  @get('/horariocursos/{id}', {
    responses: {
      '200': {
        description: 'Horariocurso model instance',
        content: {'application/json': {schema: {'x-ts-type': Horariocurso}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Horariocurso> {
    return await this.horariocursoRepository.findById(id);
  }

  @patch('/horariocursos/{id}', {
    responses: {
      '204': {
        description: 'Horariocurso PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() horariocurso: Horariocurso,
  ): Promise<void> {
    await this.horariocursoRepository.updateById(id, horariocurso);
  }

  @put('/horariocursos/{id}', {
    responses: {
      '204': {
        description: 'Horariocurso PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() horariocurso: Horariocurso,
  ): Promise<void> {
    await this.horariocursoRepository.replaceById(id, horariocurso);
  }

  @del('/horariocursos/{id}', {
    responses: {
      '204': {
        description: 'Horariocurso DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.horariocursoRepository.deleteById(id);
  }
}
