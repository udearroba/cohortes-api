import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Cursoprogramado } from './cursoprogramado.model';
import { Cursocohorte } from './cursocohorte.model';
import { Horariocurso } from './horariocurso.model';
import { Contacto } from './contacto.model';

@model({ settings: { "strict": false } })
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

  // Define well-known properties here
  @hasMany(() => Cursoprogramado)
  cursoprogramados?: Cursoprogramado[];

  @hasMany(() => Cursocohorte)
  cursocohortes?: Cursocohorte[];

  @hasMany(() => Horariocurso)
  horariocursos?: Horariocurso[];

  @belongsTo(() => Contacto, { keyTo: 'id' })
  contactoId: number;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Cohorte>) {
    super(data);
  }
}
