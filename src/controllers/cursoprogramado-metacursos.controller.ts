import { post, param, requestBody } from '@loopback/rest';
import { CursoprogramadoRepository } from '../repositories/';
import { Cursoprogramado, Metacurso } from '../models/';
import { repository } from '@loopback/repository';

export class CustomerOrdersController {
  constructor(
    @repository(CursoprogramadoRepository)
    protected cursoprogramadoRepository: CursoprogramadoRepository,
  ) { }

  @post('/cursoprogramados/{id}/metacurso')
  async createMetacurso(
    @param.path.number('id') cursoprogramadoId: typeof Cursoprogramado.prototype.id,
    @requestBody() metacursoData: Metacurso,
  ): Promise<Metacurso> {
    return await this.cursoprogramadoRepository.metacursos(cursoprogramadoId).create(metacursoData);
  }
}
