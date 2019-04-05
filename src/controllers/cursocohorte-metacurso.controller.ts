import { repository, Filter } from "@loopback/repository";
import { CursocohorteRepository } from "../repositories";
import { Metacurso } from "../models";
import { get, param } from "@loopback/rest";

export class CursocohorteMetacursoController {
  constructor(
    @repository(CursocohorteRepository) protected cursocohorteRepo: CursocohorteRepository,
  ) { }

  @get('/cursoscohortes/{id}/metacursos')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Metacurso[]> {
    return await this.cursocohorteRepo.metacursos(id).find(filter);
  }
}
