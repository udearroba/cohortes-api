import { Entity, model, property, hasOne, hasMany } from '@loopback/repository';
import { Horariocurso } from './horariocurso.model';
import { Ocurrencia } from './ocurrencia.model';

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

  @hasOne(() => Horariocurso)
  horariocurso?: Horariocurso;

  @hasMany(() => Ocurrencia)
  ocurrencias?: Ocurrencia[];


  constructor(data?: Partial<Reunionvideoconferencia>) {
    super(data);
  }
}
