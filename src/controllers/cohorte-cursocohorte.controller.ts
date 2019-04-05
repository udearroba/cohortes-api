import { repository, Filter } from "@loopback/repository";
import { CohorteRepository } from "../repositories";
import { get, param } from "@loopback/rest";
import { Cursocohorte } from "../models";

export class CohorteCursocohorteController {
  constructor(
    @repository(CohorteRepository) protected cohorteRepo: CohorteRepository,
  ) { }

  @get('/cohortes/{id}/cursocohortes')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Cursocohorte[]> {
    return await this.cohorteRepo.cursocohortes(id).find(filter);
  }
}
