import { Horariocurso } from "../models";
import { repository, Filter } from "@loopback/repository";
import { ContactoRepository } from "../repositories";
import { get, param } from "@loopback/rest";

export class ContactoHorariocursoController {
  constructor(
    @repository(ContactoRepository) protected contactoRepo: ContactoRepository,
  ) { }

  @get('/contactos/{id}/horariocurso')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Horariocurso[]> {
    return await this.contactoRepo.horariocursos(id).find(filter);
  }
}
