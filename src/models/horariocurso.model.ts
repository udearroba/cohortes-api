import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Reunionvideoconferencia } from './reunionvideoconferencia.model';

@model()
export class Horariocurso extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'date',
    dataType: 'date',
    required: true,
  })
  fechainicial: string;

  @property({
    type: 'date',
    dataType: 'date',
    required: true,
  })
  fechafinal: string;

  @property({
    type: 'boolean',
  })
  lunes?: boolean;

  @property({
    type: 'boolean',
  })
  martes?: boolean;

  @property({
    type: 'boolean',
  })
  miercoles?: boolean;

  @property({
    type: 'boolean',
  })
  jueves?: boolean;

  @property({
    type: 'boolean',
  })
  viernes?: boolean;

  @property({
    type: 'boolean',
  })
  sabado?: boolean;

  @property({
    type: 'boolean',
  })
  domingo?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  duracion: number;

  @property({
    type: 'boolean',
    required: true,
  })
  necesitavideoconferencia: number;

  @property({
    type: 'number',
    required: true,
  })
  periodo: number;

  @property({
    type: 'number'
  })
  cursocohorteId: number;

  @property({
    type: 'number'
  })
  profesor1Id: number;

  @property({
    type: 'number'
  })
  recurrenciaId: number;

  @belongsTo(() => Reunionvideoconferencia)
  reunionvideoconferenciaId: number;


  constructor(data?: Partial<Horariocurso>) {
    super(data);
  }
}
