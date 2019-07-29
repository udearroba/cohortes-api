import {Entity, model, property, hasMany} from '@loopback/repository';
import {Respuesta} from './respuesta.model';

@model({settings: {strict: false}})
export class Formulario extends Entity {
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
    type: 'string',
    required: true,
    limit: 65535,

  })
  json: string;

  @hasMany(() => Respuesta)
  respuestas: Respuesta[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Formulario>) {
    super(data);
  }
}

export interface FormularioRelations {
  // describe navigational properties here
}

export type FormularioWithRelations = Formulario & FormularioRelations;
