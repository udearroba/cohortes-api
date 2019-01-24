import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Cursocohorte } from './cursocohorte.model';
import { Cursoprogramado } from './cursoprogramado.model';

@model({ settings: { "strict": false } })
export class Metacurso extends Entity {
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



  // Define well-known properties here

  @belongsTo(() => Cursoprogramado)
  cursoprogramadoId: number;

  @belongsTo(() => Cursocohorte)
  cursocohorteId: number;


  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Metacurso>) {
    super(data);
  }
}
