import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Respuesta extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
  })
  fechaHora: string;

  @property({
    type: 'string',
    required: true,
    limit: 65535,
  })
  respuestas: string;

  @property({
    type: 'string',
    required: true,
    limit: 65535,
  })
  formularioRespuestas: string;

  @property({
    type: 'number',
  })
  formularioId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Respuesta>) {
    super(data);
  }
}

export interface RespuestaRelations {
  // describe navigational properties here
}

export type RespuestaWithRelations = Respuesta & RespuestaRelations;
