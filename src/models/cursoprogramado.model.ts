import { Entity, model, property } from '@loopback/repository';

@model()
export class Cursoprogramado extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  grupo: number;

  @property({
    type: 'number'
  })
  materiaId: number;


  constructor(data?: Partial<Cursoprogramado>) {
    super(data);
  }
}
