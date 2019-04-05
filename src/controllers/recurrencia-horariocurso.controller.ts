import { repository, Filter } from "@loopback/repository";
import { RecurrenciaRepository } from "../repositories";
import { get, param } from "@loopback/rest";
import { Horariocurso } from "../models";

export class RecurrenciaHorariocursoController {
  constructor(
    @repository(RecurrenciaRepository) protected contactoRepo: RecurrenciaRepository,
  ) { }

  @get('/recurrencias/{id}/horariocursos')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Horariocurso[]> {
    return await this.contactoRepo.horariocursos(id).find(filter);
  }
}
