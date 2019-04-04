import { repository } from "@loopback/repository";
import { MateriaRepository } from "../repositories";
import { post, param, requestBody } from "@loopback/rest";
import { Cursoprogramado } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class MateriaCursoprogramadoController {
  constructor(
    @repository(MateriaRepository) protected materiaRepo: MateriaRepository,
  ) { }

  @post('/materia/{id}/cursoprogramado')
  async create(@param.path.number('id') id: number, @requestBody() cursoprogramado: Cursoprogramado) {
    return await this.materiaRepo.cursosprogramados(id).create(cursoprogramado);
  }
}
