import { repository } from "@loopback/repository";
import { MateriaRepository } from "../repositories";
import { post, param, requestBody } from "@loopback/rest";
import { Cursoprogramado } from "../models";

export class MateriaCursoprogramadoController {
  constructor(
    @repository(MateriaRepository) protected materiaRepo: MateriaRepository,
  ) { }

  @post('/materia/{id}/cursoprogramado')
  async create(@param.path.number('id') id: number, @requestBody() cursoprogramado: Cursoprogramado) {
    return await this.materiaRepo.cursosprogramados(id).create(cursoprogramado);
  }
}
