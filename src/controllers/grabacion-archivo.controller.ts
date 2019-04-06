import { repository, Filter } from "@loopback/repository";
import { GrabacionRepository } from "../repositories";
import { get, param } from "@loopback/rest";
import { Archivo } from "../models";

export class GrabacionArchivoController {
  constructor(
    @repository(GrabacionRepository) protected grabacionRepo: GrabacionRepository,
  ) { }

  @get('/grabaciones/{id}/archivos')
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Archivo[]> {
    return await this.grabacionRepo.archivos(id).find(filter);
  }
}
