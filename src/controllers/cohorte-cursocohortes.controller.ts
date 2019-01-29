import { post, param, requestBody } from '@loopback/rest';
import { CohorteRepository } from '../repositories/';
import { Cohorte, Cursocohorte } from '../models/';
import { repository } from '@loopback/repository';

export class CohorteCursocohortesController {
  constructor(
    @repository(CohorteRepository)
    protected cohorteRepository: CohorteRepository,
  ) { }

  @post('/cohorte/{id}/cursocohorte')
  async createCursocohorte(
    @param.path.number('id') cohorteId: typeof Cohorte.prototype.id,
    @requestBody() cursocohorteData: Cursocohorte,
  ): Promise<Cursocohorte> {
    return await this.cohorteRepository.cursocohortes(cohorteId).create(cursocohorteData);
  }
}
