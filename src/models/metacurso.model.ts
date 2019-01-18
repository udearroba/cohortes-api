import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Materia } from './materia.model';
import { Cohorte } from './cohorte.model';
import { Cursocohorte } from './cursocohorte.model';

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

  @belongsTo(() => Materia)
  materiaId: number;

  @belongsTo(() => Cohorte)
  cohorteId: number;

  @belongsTo(() => Cursocohorte)
  cursocohorteId: number;


  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Metacurso>) {
    super(data);
  }
}
