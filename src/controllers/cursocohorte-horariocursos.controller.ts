import { post, param, requestBody } from '@loopback/rest';
import { CursocohorteRepository } from '../repositories/';
import { Cursocohorte, Horariocurso } from '../models/';
import { repository } from '@loopback/repository';

export class CursocohorteHorariocursosController {
  constructor(
    @repository(CursocohorteRepository)
    protected cursocohorteRepository: CursocohorteRepository,
  ) { }

  @post('/cursocohorte/{id}/horariocurso')
  async createHorariocurso(
    @param.path.number('id') cursocohorteId: typeof Cursocohorte.prototype.id,
    @requestBody() horariocursoData: Horariocurso,
  ): Promise<Horariocurso> {
    return await this.cursocohorteRepository.horariocursos(cursocohorteId).create(horariocursoData);
  }
}
