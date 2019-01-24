import { post, param, requestBody } from '@loopback/rest';
import { MateriaRepository } from '../repositories/';
import { Materia, Cursoprogramado } from '../models/';
import { repository } from '@loopback/repository';

export class MateriaMetacursosController {
  constructor(
    @repository(MateriaRepository)
    protected materiaRepository: MateriaRepository,
  ) { }

  @post('/materia/{id}/cursoprogramado')
  async createCursoprogramado(
    @param.path.number('id') materiaId: typeof Materia.prototype.id,
    @requestBody() cursoprogramadoData: Cursoprogramado,
  ): Promise<Cursoprogramado> {
    return await this.materiaRepository.cursoprogramados(materiaId).create(cursoprogramadoData);
  }
}
