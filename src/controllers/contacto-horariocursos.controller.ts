import { post, param, requestBody } from '@loopback/rest';
import { ContactoRepository } from '../repositories/';
import { Contacto, Horariocurso } from '../models/';
import { repository } from '@loopback/repository';

export class ContactoHorariocursosController {
  constructor(
    @repository(ContactoRepository)
    protected contactoRepository: ContactoRepository,
  ) { }

  @post('/contacto/{id}/horariocurso')
  async createHorariocurso(
    @param.path.number('id') contactoId: typeof Contacto.prototype.id,
    @requestBody() horariocursoData: Horariocurso,
  ): Promise<Horariocurso> {
    return await this.contactoRepository.horariocursos(contactoId).create(horariocursoData);
  }
}
