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
import { Reunionvideoconferencia } from '../models';
import { ReunionvideoconferenciaRepository } from '../repositories';

import { Ocurrencia } from '../models';
import { OcurrenciaRepository } from '../repositories';

import { Grabacion } from '../models';
import { GrabacionRepository } from '../repositories';


export class ReunionvideoconferenciaController {
  constructor(
    @repository(ReunionvideoconferenciaRepository)
    public reunionvideoconferenciaRepository: ReunionvideoconferenciaRepository,
    @repository(OcurrenciaRepository)
    public ocurrenciaRepository: OcurrenciaRepository,
    @repository(GrabacionRepository)
    public grabacionRepository: GrabacionRepository,
  ) { }

  @post('/reunionvideoconferencias', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Reunionvideoconferencia } } },
      },
    },
  })
  async create(@requestBody() reunionvideoconferencia: Reunionvideoconferencia): Promise<Reunionvideoconferencia> {
    return await this.reunionvideoconferenciaRepository.create(reunionvideoconferencia);
  }

  @get('/reunionvideoconferencias/count', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reunionvideoconferencia)) where?: Where,
  ): Promise<Count> {
    return await this.reunionvideoconferenciaRepository.count(where);
  }

  @get('/reunionvideoconferencias', {
    responses: {
      '200': {
        description: 'Array of Reunionvideoconferencia model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Reunionvideoconferencia } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reunionvideoconferencia)) filter?: Filter,
  ): Promise<Reunionvideoconferencia[]> {
    return await this.reunionvideoconferenciaRepository.find(filter);
  }

  @patch('/reunionvideoconferencias', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() reunionvideoconferencia: Reunionvideoconferencia,
    @param.query.object('where', getWhereSchemaFor(Reunionvideoconferencia)) where?: Where,
  ): Promise<Count> {
    return await this.reunionvideoconferenciaRepository.updateAll(reunionvideoconferencia, where);
  }

  @get('/reunionvideoconferencias/{id}', {
    responses: {
      '200': {
        description: 'Reunionvideoconferencia model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Reunionvideoconferencia } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Reunionvideoconferencia> {
    return await this.reunionvideoconferenciaRepository.findById(id);
  }

  @patch('/reunionvideoconferencias/{id}', {
    responses: {
      '204': {
        description: 'Reunionvideoconferencia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() reunionvideoconferencia: Reunionvideoconferencia,
  ): Promise<void> {
    await this.reunionvideoconferenciaRepository.updateById(id, reunionvideoconferencia);
  }

  @put('/reunionvideoconferencias/{id}', {
    responses: {
      '204': {
        description: 'Reunionvideoconferencia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reunionvideoconferencia: Reunionvideoconferencia,
  ): Promise<void> {
    await this.reunionvideoconferenciaRepository.replaceById(id, reunionvideoconferencia);
  }

  @del('/reunionvideoconferencias/{id}', {
    responses: {
      '204': {
        description: 'Reunionvideoconferencia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reunionvideoconferenciaRepository.deleteById(id);
  }

  @get('/reunionvideoconferencias/listar/', {
    responses: {
      '200': {
        description: 'Array of Reunionvideoconferencia para paginación instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Reunionvideoconferencia } },
          },
        },
      },
    },
  })
  async findList(
    @param.query.number('limit') limit: number,
  ): Promise<any[]> {

    var filtro = {
      "limit": limit,
    };

    let reuniones = await this.reunionvideoconferenciaRepository.find(filtro);
    let _reuniones: any[] = []
    for (const reunion of reuniones) {
      let reunionObj = {
        data: {},
        ocurrencias: {},
      }
      let ocurrencias = await this.reunionvideoconferenciaRepository.ocurrencias(reunion.id).find();
      let _ocurrencias = []
      reunionObj.data = reunion

      for (const ocurrencia of ocurrencias) {
        let ocurrenciaObj = {
          data: {},
          grabaciones: {},
        }
        let grabaciones = await this.ocurrenciaRepository.grabaciones(ocurrencia.id).find();
        let _grabaciones = []
        ocurrenciaObj.data = ocurrencia
        for (const grabacion of grabaciones) {
          let grabacionObj = {
            data: {},
            archivos: {},
          }
          let archivos = await this.grabacionRepository.archivos(grabacion.id).find();
          grabacionObj.data = grabacion
          grabacionObj.archivos = archivos

          _grabaciones.push(grabacionObj)
        }
        ocurrenciaObj.grabaciones = _grabaciones
        _ocurrencias.push(ocurrenciaObj)
      }
      reunionObj.ocurrencias = _ocurrencias
      _reuniones.push(reunionObj)
    }
    return _reuniones
  }
  @get('/reunionvideoconferencias/richTable/', {
    responses: {
      '200': {
        description: 'Array of Reunionvideoconferencia para paginación instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Reunionvideoconferencia } },
          },
        },
      },
    },
  })
  async getRichTableData(
    @param.query.number('limit') limit: number,
    @param.query.number('offset') offset: number,
  ): Promise<any[]> {

    var filtro = {
      "limit": limit,
      "offset": offset,
    };

    let reuniones = await this.reunionvideoconferenciaRepository.find(filtro);
    let data: any[] = []
    for (const reunion of reuniones) {
      let ocurrencias = await this.reunionvideoconferenciaRepository.ocurrencias(reunion.id).find();
      for (const ocurrencia of ocurrencias) {
        let grabaciones = await this.ocurrenciaRepository.grabaciones(ocurrencia.id).find();
        for (const grabacion of grabaciones) {
          let archivos = await this.grabacionRepository.archivos(grabacion.id).find();

          for (const archivo of archivos) {
            let dataObj = {
              reunion: {},
              ocurrencia: {},
              grabacion: {},
              archivo: {}
            }
            dataObj.reunion = reunion
            dataObj.ocurrencia = ocurrencia
            dataObj.grabacion = grabacion
            dataObj.archivo = archivo
            data.push(dataObj)
          }
          if (archivos.length != 0) {
            continue
          }
          let dataObj = {
            reunion: {},
            ocurrencia: {},
            grabacion: {},
          }
          dataObj.reunion = reunion
          dataObj.ocurrencia = ocurrencia
          dataObj.grabacion = grabacion
          data.push(dataObj)
        }
        if (grabaciones.length != 0) {
          continue
        }
        let dataObj = {
          reunion: {},
          ocurrencia: {},
        }
        dataObj.reunion = reunion
        dataObj.ocurrencia = ocurrencia
        data.push(dataObj)
      }
      if (ocurrencias.length != 0) {
        continue
      }
      let dataObj = {
        reunion: {},
      }
      dataObj.reunion = reunion
      data.push(dataObj)
    }
    return data
  }

  @get('/reunionvideoconferencias/test')
  async findTest(
    @param.query.object('filter') filter?: Filter,
  ): Promise<Ocurrencia[]> {
    return await this.reunionvideoconferenciaRepository
      .ocurrencias(11).find(filter);
  }
}
