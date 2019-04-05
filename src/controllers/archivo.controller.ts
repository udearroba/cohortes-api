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
import {Archivo} from '../models';
import {ArchivoRepository} from '../repositories';

export class ArchivoController {
  constructor(
    @repository(ArchivoRepository)
    public archivoRepository : ArchivoRepository,
  ) {}

  @post('/archivos', {
    responses: {
      '200': {
        description: 'Archivo model instance',
        content: {'application/json': {schema: {'x-ts-type': Archivo}}},
      },
    },
  })
  async create(@requestBody() archivo: Archivo): Promise<Archivo> {
    return await this.archivoRepository.create(archivo);
  }

  @get('/archivos/count', {
    responses: {
      '200': {
        description: 'Archivo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Archivo)) where?: Where,
  ): Promise<Count> {
    return await this.archivoRepository.count(where);
  }

  @get('/archivos', {
    responses: {
      '200': {
        description: 'Array of Archivo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Archivo}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Archivo)) filter?: Filter,
  ): Promise<Archivo[]> {
    return await this.archivoRepository.find(filter);
  }

  @patch('/archivos', {
    responses: {
      '200': {
        description: 'Archivo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() archivo: Archivo,
    @param.query.object('where', getWhereSchemaFor(Archivo)) where?: Where,
  ): Promise<Count> {
    return await this.archivoRepository.updateAll(archivo, where);
  }

  @get('/archivos/{id}', {
    responses: {
      '200': {
        description: 'Archivo model instance',
        content: {'application/json': {schema: {'x-ts-type': Archivo}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Archivo> {
    return await this.archivoRepository.findById(id);
  }

  @patch('/archivos/{id}', {
    responses: {
      '204': {
        description: 'Archivo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() archivo: Archivo,
  ): Promise<void> {
    await this.archivoRepository.updateById(id, archivo);
  }

  @put('/archivos/{id}', {
    responses: {
      '204': {
        description: 'Archivo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() archivo: Archivo,
  ): Promise<void> {
    await this.archivoRepository.replaceById(id, archivo);
  }

  @del('/archivos/{id}', {
    responses: {
      '204': {
        description: 'Archivo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.archivoRepository.deleteById(id);
  }
}
