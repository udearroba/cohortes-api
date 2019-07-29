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
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Formulario} from '../models';
import {FormularioRepository} from '../repositories';

export class FormularioController {
  constructor(
    @repository(FormularioRepository)
    public formularioRepository : FormularioRepository,
  ) {}

  @post('/formularios', {
    responses: {
      '200': {
        description: 'Formulario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Formulario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formulario, {exclude: ['id']}),
        },
      },
    })
    formulario: Omit<Formulario, 'id'>,
  ): Promise<Formulario> {
    return await this.formularioRepository.create(formulario);
  }

  @get('/formularios/count', {
    responses: {
      '200': {
        description: 'Formulario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Formulario)) where?: Where<Formulario>,
  ): Promise<Count> {
    return await this.formularioRepository.count(where);
  }

  @get('/formularios', {
    responses: {
      '200': {
        description: 'Array of Formulario model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Formulario)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Formulario)) filter?: Filter<Formulario>,
  ): Promise<Formulario[]> {
    return await this.formularioRepository.find(filter);
  }

  @patch('/formularios', {
    responses: {
      '200': {
        description: 'Formulario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formulario, {partial: true}),
        },
      },
    })
    formulario: Formulario,
    @param.query.object('where', getWhereSchemaFor(Formulario)) where?: Where<Formulario>,
  ): Promise<Count> {
    return await this.formularioRepository.updateAll(formulario, where);
  }

  @get('/formularios/{id}', {
    responses: {
      '200': {
        description: 'Formulario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Formulario)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Formulario> {
    return await this.formularioRepository.findById(id);
  }

  @patch('/formularios/{id}', {
    responses: {
      '204': {
        description: 'Formulario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formulario, {partial: true}),
        },
      },
    })
    formulario: Formulario,
  ): Promise<void> {
    await this.formularioRepository.updateById(id, formulario);
  }

  @put('/formularios/{id}', {
    responses: {
      '204': {
        description: 'Formulario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() formulario: Formulario,
  ): Promise<void> {
    await this.formularioRepository.replaceById(id, formulario);
  }

  @del('/formularios/{id}', {
    responses: {
      '204': {
        description: 'Formulario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.formularioRepository.deleteById(id);
  }
}
