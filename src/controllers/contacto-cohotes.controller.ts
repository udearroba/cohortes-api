import { post, param, requestBody } from '@loopback/rest';
import { ContactoRepository } from '../repositories/';
import { Contacto, Cohorte } from '../models/';
import { repository } from '@loopback/repository';

export class ContactoCohortesController {
  constructor(
    @repository(ContactoRepository)
    protected contactoRepository: ContactoRepository,
  ) { }

  @post('/contacto/{id}/cohorte')
  async createCohorte(
    @param.path.number('id') contactoId: typeof Contacto.prototype.id,
    @requestBody() cohorteData: Cohorte,
  ): Promise<Cohorte> {
    return await this.contactoRepository.cohortes(contactoId).create(cohorteData);
  }
}
