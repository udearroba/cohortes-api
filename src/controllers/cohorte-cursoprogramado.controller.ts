import { repository, Filter } from "@loopback/repository";
import { CohorteRepository } from "../repositories";
import { get, param } from "@loopback/rest";
import { Cursoprogramado } from "../models";

export class CohorteCursoprogramadoController {
  constructor(
    @repository(CohorteRepository) protected cohorteRepo: CohorteRepository,
  ) { }

  @get('/cohortes/{id}/cursosprogramados')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Cursoprogramado[]> {
    return await this.cohorteRepo.cursosprogramados(id).find(filter);
  }
}
