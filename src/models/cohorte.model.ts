import { Entity, model, property, hasMany } from '@loopback/repository';
import { Cursoprogramado } from './cursoprogramado.model';
import { Cursocohorte } from './cursocohorte.model';

@model()
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

  @property({
    type: 'number'
  })
  coordinadoracademicoId: number;

  @hasMany(() => Cursoprogramado)
  cursosprogramados?: Cursoprogramado[];

  @hasMany(() => Cursocohorte)
  cursocohortes?: Cursocohorte[];

  constructor(data?: Partial<Cohorte>) {
    super(data);
  }
}
