import { post, param, requestBody } from '@loopback/rest';
import { CursocohorteRepository } from '../repositories/';
import { Cursocohorte, Metacurso } from '../models/';
import { repository } from '@loopback/repository';

export class CursocohorteMetacursosController {
  constructor(
    @repository(CursocohorteRepository)
    protected cursocohorteRepository: CursocohorteRepository,
  ) { }

  @post('/cursocohorte/{id}/metacurso')
  async createMetacurso(
    @param.path.number('id') cursocohorteId: typeof Cursocohorte.prototype.id,
    @requestBody() metacursoData: Metacurso,
  ): Promise<Metacurso> {
    return await this.cursocohorteRepository.metacursos(cursocohorteId).create(metacursoData);
  }
}
