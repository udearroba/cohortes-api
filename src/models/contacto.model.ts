import { Entity, model, property, hasMany } from '@loopback/repository';
import { Cohorte } from './cohorte.model';
import { Horariocurso } from './horariocurso.model';

@model()
export class Contacto extends Entity {
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
  email1: string;

  @property({
    type: 'string',
    limit: 45,
  })
  email2?: string;

  @property({
    type: 'string',
    required: true,
    limit: 45,
  })
  nombre: string;

  @property({
    type: 'string',
    limit: 45,
  })
  telefono?: string;

  @hasMany(() => Cohorte, { keyTo: "coordinadoracademicoId" })
  cohortes?: Cohorte[];

  @hasMany(() => Horariocurso, { keyTo: "profesor1Id" })
  horariocursos?: Cohorte[];


  constructor(data?: Partial<Contacto>) {
    super(data);
  }
}
