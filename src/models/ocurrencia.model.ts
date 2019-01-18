import { Entity, model, property, belongsTo } from '@loopback/repository';

import { Reunionvideoconferencia } from './reunionvideoconferencia.model';

@model({ settings: { "strict": false } })
export class Ocurrencia extends Entity {
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
  starttime: string;

  @property({
    type: 'number',
    required: true,
  })
  duration: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;



  // Define well-known properties here
  @belongsTo(() => Reunionvideoconferencia)
  reunionvideoconferenciaId: number;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Ocurrencia>) {
    super(data);
  }
}
