import { repository, Filter } from "@loopback/repository";
import { CursocohorteRepository } from "../repositories";
import { get, param } from "@loopback/rest";
import { Horariocurso } from "../models";

export class CursocohorteHorariocursoController {
  constructor(
    @repository(CursocohorteRepository) protected cursocohorteRepo: CursocohorteRepository,
  ) { }

  @get('/cursocohortes/{id}/horariocursos')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Horariocurso[]> {
    return await this.cursocohorteRepo.horariocursos(id).find(filter);
  }
}
