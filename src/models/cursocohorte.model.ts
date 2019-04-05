import { Entity, model, property, hasMany } from '@loopback/repository';
import { Metacurso } from './metacurso.model';
import { Horariocurso } from './horariocurso.model';

@model()
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
    type: 'boolean',
    required: true,
  })
  isprogramadoenreuniones: boolean;

  @property({
    type: 'string',
  })
  idlms?: string;

  @property({
    type: 'string',
  })
  urllms?: string;

  @property({
    type: 'number',
  })
  cohorteId?: string;

  @hasMany(() => Metacurso)
  metacursos?: Metacurso[];

  @hasMany(() => Horariocurso)
  horariocursos?: Horariocurso[];


  constructor(data?: Partial<Cursocohorte>) {
    super(data);
  }
}
