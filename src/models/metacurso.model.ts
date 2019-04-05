import { Entity, model, property } from '@loopback/repository';

@model()
export class Metacurso extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'number'
  })
  cursoprogramadoId: number;


  constructor(data?: Partial<Metacurso>) {
    super(data);
  }
}
