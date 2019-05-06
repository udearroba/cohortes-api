import { Entity, model, property, hasMany } from '@loopback/repository';
import { Metacurso } from './metacurso.model';

@model()
export class Cursoprogramado extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  grupo: number;

  @property({
    type: 'number'
  })
  materiaId: number;

  @property({
    type: 'number'
  })
  cohorteId: number;

  @hasMany(() => Metacurso)
  metacursos?: Metacurso[];


  constructor(data?: Partial<Cursoprogramado>) {
    super(data);
  }
}
