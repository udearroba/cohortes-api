import { repository, Filter } from "@loopback/repository";
import { ContactoRepository } from "../repositories";
import { post, get, param, requestBody } from "@loopback/rest";
import { Cohorte } from "../models";

export class ContactoCohorteController {
  constructor(
    @repository(ContactoRepository) protected contactoRepo: ContactoRepository,
  ) { }

  @post('/contactos/{id}/cohortes')
  async create(@param.path.number('id') id: number, @requestBody() cohorte: Cohorte) {
    return await this.contactoRepo.cohortes(id).create(cohorte);
  }

  @get('/contactos/{id}/cohortes')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Cohorte[]> {
    return await this.contactoRepo.cohortes(id).find(filter);
  }
}
