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
import {Contacto} from '../models';
import {ContactoRepository} from '../repositories';

export class ContactoController {
  constructor(
    @repository(ContactoRepository)
    public contactoRepository : ContactoRepository,
  ) {}

  @post('/contactos', {
    responses: {
      '200': {
        description: 'Contacto model instance',
        content: {'application/json': {schema: {'x-ts-type': Contacto}}},
      },
    },
  })
  async create(@requestBody() contacto: Contacto): Promise<Contacto> {
    return await this.contactoRepository.create(contacto);
  }

  @get('/contactos/count', {
    responses: {
      '200': {
        description: 'Contacto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Contacto)) where?: Where,
  ): Promise<Count> {
    return await this.contactoRepository.count(where);
  }

  @get('/contactos', {
    responses: {
      '200': {
        description: 'Array of Contacto model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Contacto}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Contacto)) filter?: Filter,
  ): Promise<Contacto[]> {
    return await this.contactoRepository.find(filter);
  }

  @patch('/contactos', {
    responses: {
      '200': {
        description: 'Contacto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() contacto: Contacto,
    @param.query.object('where', getWhereSchemaFor(Contacto)) where?: Where,
  ): Promise<Count> {
    return await this.contactoRepository.updateAll(contacto, where);
  }

  @get('/contactos/{id}', {
    responses: {
      '200': {
        description: 'Contacto model instance',
        content: {'application/json': {schema: {'x-ts-type': Contacto}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Contacto> {
    return await this.contactoRepository.findById(id);
  }

  @patch('/contactos/{id}', {
    responses: {
      '204': {
        description: 'Contacto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() contacto: Contacto,
  ): Promise<void> {
    await this.contactoRepository.updateById(id, contacto);
  }

  @put('/contactos/{id}', {
    responses: {
      '204': {
        description: 'Contacto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() contacto: Contacto,
  ): Promise<void> {
    await this.contactoRepository.replaceById(id, contacto);
  }

  @del('/contactos/{id}', {
    responses: {
      '204': {
        description: 'Contacto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.contactoRepository.deleteById(id);
  }
}
