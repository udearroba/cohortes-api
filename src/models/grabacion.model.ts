import { Entity, model, property, hasMany } from '@loopback/repository';
import { Archivo } from './archivo.model';

@model()
export class Grabacion extends Entity {
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
    type: 'number'
  })
  ocurrenciaId: number;

  @hasMany(() => Archivo)
  archivos?: Archivo[];


  constructor(data?: Partial<Grabacion>) {
    super(data);
  }
}
