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
    limit: 45,
  })
  uuid: string;

  @property({
    type: 'string',
    required: true,
    limit: 45,
  })
  idsistemaexterno: string;

  @property({
    type: 'string',
    required: true,
    limit: 100,
  })
  urljoin: string;

  @property({
    type: 'string',
    required: true,
    limit: 100,
  })
  urlstart: string;

  @property({
    type: 'string',
    required: true,
    limit: 45,
  })
  hostid: string;

  @property({
    type: 'string',
    limit: 45,
  })
  createdat?: string;

  @property({
    type: 'string',
    required: true,
    limit: 45,
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
