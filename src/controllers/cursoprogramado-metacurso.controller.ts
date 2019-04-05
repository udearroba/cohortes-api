import { repository, Filter } from "@loopback/repository";
import { CursoprogramadoRepository } from "../repositories";
import { get, param } from "@loopback/rest";
import { Metacurso } from "../models";

export class CursoprogramadoMetacursoController {
  constructor(
    @repository(CursoprogramadoRepository)
    protected cursoprogramadoRepo: CursoprogramadoRepository,
  ) { }

  @get('/cursosprogramados/{id}/metacursos')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Metacurso[]> {
    return await this.cursoprogramadoRepo.metacursos(id).find(filter);
  }
}
