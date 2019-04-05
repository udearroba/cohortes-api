import { OcurrenciaRepository } from "../repositories";
import { repository, Filter } from "@loopback/repository";
import { Grabacion } from "../models";
import { get, param } from "@loopback/rest";

export class OcurrenciaGrabacionController {
  constructor(
    @repository(OcurrenciaRepository) protected ocurrenciaRepo: OcurrenciaRepository,
  ) { }

  @get('/ocurrencias/{id}/grabaciones')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Grabacion[]> {
    return await this.ocurrenciaRepo.grabaciones(id).find(filter);
  }
}
