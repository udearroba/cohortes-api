import { repository, Filter } from "@loopback/repository";
import { ReunionvideoconferenciaRepository } from "../repositories";
import { Ocurrencia } from "../models";
import { get, param } from "@loopback/rest";

export class ReunionvideoconferenciaOcurrenciaController {
  constructor(
    @repository(ReunionvideoconferenciaRepository)
    protected reunionvideoconferenciaRepo: ReunionvideoconferenciaRepository,
  ) { }

  @get('/reunionvideoconferencias/{id}/ocurrencias')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Ocurrencia[]> {
    return await this.reunionvideoconferenciaRepo
      .ocurrencias(id).find(filter);
  }
}
