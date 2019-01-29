import { post, param, requestBody } from '@loopback/rest';
import { CohorteRepository } from '../repositories/';
import { Cohorte, Horariocurso } from '../models/';
import { repository } from '@loopback/repository';

export class CohorteHorariocursosController {
  constructor(
    @repository(CohorteRepository)
    protected cohorteRepository: CohorteRepository,
  ) { }

  @post('/cohorte/{id}/horariocurso')
  async createHorariocurso(
    @param.path.number('id') cohorteId: typeof Cohorte.prototype.id,
    @requestBody() horariocursoData: Horariocurso,
  ): Promise<Horariocurso> {
    return await this.cohorteRepository.horariocursos(cohorteId).create(horariocursoData);
  }
}
