import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Metacurso } from './metacurso.model';
import { Cohorte } from './cohorte.model';
import { Horariocurso } from './horariocurso.model';

@model({ settings: { "strict": false } })
export class Cursocohorte extends Entity {
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
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  isprogramadoenreuniones: number;

  @property({
    type: 'string',
  })
  idlms?: string;

  @property({
    type: 'string',
  })
  urllms?: string;

  // Define well-known properties here

  @hasMany(() => Metacurso)
  metacursos?: Metacurso[];

  @hasMany(() => Horariocurso)
  horariocursos?: Horariocurso[];

  @belongsTo(() => Cohorte)
  cohorteId: number;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Cursocohorte>) {
    super(data);
  }
}
