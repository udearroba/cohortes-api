import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Grabacion>) {
    super(data);
  }
}
