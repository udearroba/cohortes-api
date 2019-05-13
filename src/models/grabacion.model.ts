import {Entity, model, property, hasMany} from '@loopback/repository';
import {Archivo} from './archivo.model';

@model()
export class Grabacion extends Entity {
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
  idexterno: string;

  @property({
    type: 'string',
    required: true,
    limit: 45,
  })
  playurl: string;

  @property({
    type: 'number',
  })
  duracion: number;

  @property({
    type: 'number',
  })
  ocurrenciaId: number;

  @hasMany(() => Archivo)
  archivos?: Archivo[];

  constructor(data?: Partial<Grabacion>) {
    super(data);
  }
}
