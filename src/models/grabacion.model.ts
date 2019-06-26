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
    limit: 100,
  })
  idexterno: string;

  @property({
    type: 'string',
    required: true,
    limit: 512,
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
