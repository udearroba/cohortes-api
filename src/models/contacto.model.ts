import { Entity, model, property, hasMany } from '@loopback/repository';

import { Cohorte } from './cohorte.model';
import { Horariocurso } from './horariocurso.model';

@model({ settings: { "strict": false } })
export class Contacto extends Entity {
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
  email1: string;

  @property({
    type: 'string',
  })
  email2?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  // Define well-known properties here
  @hasMany(() => Cohorte, { keyTo: 'coordinadoracademicoId' })
  cohortes?: Cohorte[];

  @hasMany(() => Horariocurso, { keyTo: 'profesor1Id' })
  horariocursos?: Horariocurso[];


  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Contacto>) {
    super(data);
  }
}
