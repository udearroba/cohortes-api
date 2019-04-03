import { Entity, model, property, hasMany } from '@loopback/repository';
import { Cohorte } from './cohorte.model';

@model()
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

  @hasMany(() => Cohorte, { keyTo: "coordinadoracademicoId" })
  cohortes?: Cohorte[];


  constructor(data?: Partial<Contacto>) {
    super(data);
  }
}
