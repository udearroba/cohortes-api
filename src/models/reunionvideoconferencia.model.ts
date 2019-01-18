import { Entity, model, property, hasOne, hasMany } from '@loopback/repository';

import { Horariocurso } from './horariocurso.model';
import { Ocurrencia } from './ocurrencia.model';

@model({ settings: { "strict": false } })
export class Reunionvideoconferencia extends Entity {
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
  uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  idsistemaexterno: string;

  @property({
    type: 'string',
    required: true,
  })
  urljoin: string;

  @property({
    type: 'string',
    required: true,
  })
  urlstart: string;

  @property({
    type: 'string',
    required: true,
  })
  hostid: string;

  @property({
    type: 'string',
    required: true,
  })
  createdat: string;

  // Define well-known properties here
  @hasOne(() => Horariocurso)
  horariocurso?: Horariocurso;

  @hasMany(() => Ocurrencia)
  ocurrencias?: Ocurrencia[];

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Reunionvideoconferencia>) {
    super(data);
  }
}
