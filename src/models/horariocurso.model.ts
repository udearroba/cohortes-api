import { Entity, model, property, belongsTo } from '@loopback/repository';

import { Cohorte } from './cohorte.model';
import { Cursocohorte } from './cursocohorte.model';
import { Contacto } from './contacto.model';
import { Recurrencia } from './recurrencia.model';
import { Reunionvideoconferencia } from './reunionvideoconferencia.model';

@model({ settings: { "strict": false } })
export class Horariocurso extends Entity {
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
  fechainicial: string;

  @property({
    type: 'string',
    required: true,
  })
  fechafinal: string;

  @property({
    type: 'number',
  })
  lunes?: number;

  @property({
    type: 'number',
  })
  martes?: number;

  @property({
    type: 'number',
  })
  miercoles?: number;

  @property({
    type: 'number',
  })
  jueves?: number;

  @property({
    type: 'number',
  })
  viernes?: number;

  @property({
    type: 'number',
  })
  sabado?: number;

  @property({
    type: 'number',
  })
  domingo?: number;

  @property({
    type: 'number',
    required: true,
  })
  duracion: number;



  @property({
    type: 'number',
    required: true,
  })
  necesitavideoconferencia: number;


  @property({
    type: 'number',
    required: true,
  })
  periodo: number;



  // Define well-known properties here
  @belongsTo(() => Contacto, { keyTo: 'id' })
  profesor1Id: number;

  @belongsTo(() => Cohorte)
  cohorteId: number;

  @belongsTo(() => Cursocohorte)
  cursocohorteId: number;

  @belongsTo(() => Recurrencia)
  recurrenciaId: number;

  @belongsTo(() => Reunionvideoconferencia)
  reunionvideoconferenciaId: number;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Horariocurso>) {
    super(data);
  }
}
