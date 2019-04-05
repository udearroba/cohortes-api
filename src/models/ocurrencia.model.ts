import { Entity, model, property, hasMany } from '@loopback/repository';
import { Reunionvideoconferencia } from './reunionvideoconferencia.model';
import { Grabacion } from './grabacion.model';

@model()
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
  duracion: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
  })
  reunionvideoconferenciaId: number;

  @hasMany(() => Grabacion)
  grabaciones?: Grabacion[];

  constructor(data?: Partial<Ocurrencia>) {
    super(data);
  }
}
