import { post, param, requestBody } from '@loopback/rest';
import { CohorteRepository } from '../repositories/';
import { Cohorte, Cursoprogramado } from '../models/';
import { repository } from '@loopback/repository';

export class CohorteCursoprogramadosController {
  constructor(
    @repository(CohorteRepository)
    protected cohorteRepository: CohorteRepository,
  ) { }

  @post('/cohorte/{id}/cursoprogramado')
  async createCursoprogramado(
    @param.path.number('id') cohorteId: typeof Cohorte.prototype.id,
    @requestBody() cursoprogramadoData: Cursoprogramado,
  ): Promise<Cursoprogramado> {
    return await this.cohorteRepository.cursoprogramados(cohorteId).create(cursoprogramadoData);
  }
}
