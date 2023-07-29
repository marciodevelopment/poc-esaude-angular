import { Injectable } from '@angular/core';
import { PacientePesquisaResponse } from '../interfaces/response/PacientePesquisaResponse';
import { PacienteResponse } from '../interfaces/response/PacienteResponse';
import { PacienteAtualizacaoRequest } from '../interfaces/request/PacienteAtualizacaoRequest';
import { PacienteNovoRequest } from '../interfaces/request/PacienteNovoRequest';
import { CrudService } from 'src/app/shared/services/CrudService';

@Injectable({
  providedIn: 'root',
})
export class PacienteService extends CrudService<
  PacientePesquisaResponse,
  PacienteResponse,
  PacienteNovoRequest,
  PacienteAtualizacaoRequest
> {
  constructor() {
    super('pacientes');
  }
}
