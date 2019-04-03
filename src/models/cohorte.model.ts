import { Entity, model, property } from '@loopback/repository';

@model()
export class Cohorte extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  fechainicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fechafinal: string;


  constructor(data?: Partial<Cohorte>) {
    super(data);
  }
}
