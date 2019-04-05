import { Entity, model, property } from '@loopback/repository';

@model()
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
  })
  createdat?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  constructor(data?: Partial<Reunionvideoconferencia>) {
    super(data);
  }
}
