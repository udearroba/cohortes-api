import { Entity, model, property } from '@loopback/repository';

@model()
export class Metacurso extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'number'
  })
  cursoprogramadoId: number;

  @property({
    type: 'number'
  })
  cursocohorteId: number;


  constructor(data?: Partial<Metacurso>) {
    super(data);
  }
}
