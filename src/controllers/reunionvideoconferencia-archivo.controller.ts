import { repository, Filter } from "@loopback/repository";
import {
  ReunionvideoconferenciaRepository,
  OcurrenciaRepository,
  GrabacionRepository
} from "../repositories";
import { get, param } from "@loopback/rest";
import { Ocurrencia, Grabacion, Archivo } from "../models";

export class ReunionvideoconferenciaArchivoController {
  constructor(
    @repository(ReunionvideoconferenciaRepository)
    protected reunionvideoconferenciaRepo: ReunionvideoconferenciaRepository,
    @repository(OcurrenciaRepository)
    protected ocurrenciaRepo: OcurrenciaRepository,
    @repository(GrabacionRepository)
    protected grabacionRepo: GrabacionRepository,
  ) { }

  @get('/reunionvideoconferencias/{id}/archivos') //ocurrencias
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Archivo[]> {

    let ocurrencias = await this.reunionvideoconferenciaRepo
      .ocurrencias(id).find(filter);

    let totalArchivos: Archivo[] = [];
    for (let ocurrencia of ocurrencias) {
      let grabacionesEnOcurrencia = await this.ocurrenciaRepo
        .grabaciones(ocurrencia.id).find();

      if (await grabacionesEnOcurrencia.length != 0) {
        for (let grabacion of grabacionesEnOcurrencia) {

          let archivosEnGrabacion = await this.grabacionRepo
            .archivos(grabacion.id).find();

          if (await archivosEnGrabacion.length != 0) {
            for (let archivo of archivosEnGrabacion) {
              await totalArchivos.push(archivo);
            };
          };
        };
      };
    }

    return totalArchivos;
  }
}
