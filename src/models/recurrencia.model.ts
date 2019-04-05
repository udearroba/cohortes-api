import { Entity, model, property, hasMany } from '@loopback/repository';
import { Horariocurso } from './horariocurso.model';

@model()
export class Recurrencia extends Entity {
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

  @hasMany(() => Horariocurso)
  horariocursos?: Horariocurso[];


  constructor(data?: Partial<Recurrencia>) {
    super(data);
  }
}
