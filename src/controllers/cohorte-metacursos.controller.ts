import { post, param, requestBody } from '@loopback/rest';
import { CohorteRepository } from '../repositories/';
import { Cohorte, Metacurso } from '../models/';
import { repository } from '@loopback/repository';

export class CohorteMetacursosController {
  constructor(
    @repository(CohorteRepository)
    protected cohorteRepository: CohorteRepository,
  ) { }

  @post('/cohorte/{id}/metacurso')
  async createMetacurso(
    @param.path.number('id') cohorteId: typeof Cohorte.prototype.id,
    @requestBody() metacursoData: Metacurso,
  ): Promise<Metacurso> {
    return await this.cohorteRepository.metacursos(cohorteId).create(metacursoData);
  }
}
