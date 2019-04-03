import {Entity, model, property} from '@loopback/repository';

@model()
export class Contacto extends Entity {
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
  email1: string;

  @property({
    type: 'string',
  })
  email2?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  telefono?: string;


  constructor(data?: Partial<Contacto>) {
    super(data);
  }
}
