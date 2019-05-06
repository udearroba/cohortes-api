import { Entity, model, property, hasMany } from '@loopback/repository';
import { Cursoprogramado } from './cursoprogramado.model';

@model()
export class Materia extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    limit: 45,
  })
  idexterno: string;

  @property({
    type: 'string',
    required: true,
    limit: 45,
  })
  nombre: string;

  @hasMany(() => Cursoprogramado)
  cursosprogramados?: Cursoprogramado[];


  constructor(data?: Partial<Materia>) {
    super(data);
  }
}
