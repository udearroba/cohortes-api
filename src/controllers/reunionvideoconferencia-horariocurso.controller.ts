import { repository, Filter } from "@loopback/repository";
import { ReunionvideoconferenciaRepository } from "../repositories";
import { post, param, requestBody } from "@loopback/rest";
import { Horariocurso, Reunionvideoconferencia } from "../models";

export class ReunionvideoconferenciaHorariocursoController {
  constructor(
    @repository(ReunionvideoconferenciaRepository)
    protected reunionvideoconferenciaRepository: ReunionvideoconferenciaRepository,
  ) { }

  @post('/reunionvideoconferencias/{id}/horariocursos')
  async createAccount(
    @param.path.number('id') reunionvideoconferenciaId: typeof Reunionvideoconferencia.prototype.id,
    @requestBody() accountData: Horariocurso,
  ): Promise<Horariocurso> {
    return await this.reunionvideoconferenciaRepository
      .horariocurso(reunionvideoconferenciaId)
      .create(accountData);
  }
}
