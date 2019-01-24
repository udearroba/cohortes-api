import { Entity, model, property, hasMany } from '@loopback/repository';
import { Cursoprogramado } from './cursoprogramado.model';

@model({ settings: { "strict": false } })
export class Materia extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  idexterno: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  // Define well-known properties here
  @hasMany(() => Cursoprogramado)
  cursoprogramados?: Cursoprogramado[];

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Materia>) {
    super(data);
  }
}
