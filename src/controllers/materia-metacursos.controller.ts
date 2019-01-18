import { post, param, requestBody } from '@loopback/rest';
import { MateriaRepository } from '../repositories/';
import { Materia, Metacurso } from '../models/';
import { repository } from '@loopback/repository';

export class MateriaMetacursosController {
  constructor(
    @repository(MateriaRepository)
    protected materiaRepository: MateriaRepository,
  ) { }

  @post('/materia/{id}/metacurso')
  async createMetacurso(
    @param.path.number('id') materiaId: typeof Materia.prototype.id,
    @requestBody() metacursoData: Metacurso,
  ): Promise<Metacurso> {
    return await this.materiaRepository.metacursos(materiaId).create(metacursoData);
  }
}
