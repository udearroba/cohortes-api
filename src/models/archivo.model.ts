import { Entity, model, property } from '@loopback/repository';

@model()
export class Archivo extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
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
  formato: string;

  @property({
    type: 'string',
    required: true,
    limit: 255,
  })
  url: string;

  @property({
    type: 'number'
  })
  grabacionId: number;


  constructor(data?: Partial<Archivo>) {
    super(data);
  }
}
