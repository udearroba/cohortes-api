import {Entity, model, property} from '@loopback/repository';

@model()
export class Materia extends Entity {
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
  nombre: string;


  constructor(data?: Partial<Materia>) {
    super(data);
  }
}
