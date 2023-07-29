import { Injectable } from '@angular/core';
import { MedicamentoPesquisaResponse } from '../interfaces/response/MedicamentoPesquisaResponse';
import { MedicamentoResponse } from '../interfaces/response/MedicamentoResponse';
import { MedicamentoAtualizacaoRequest } from '../interfaces/request/MedicamentoAtualizacaoRequest';
import { MedicamentoNovoRequest } from '../interfaces/request/MedicamentoNovoRequest';
import { CrudService } from 'src/app/shared/services/CrudService';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService extends CrudService<
  MedicamentoPesquisaResponse,
  MedicamentoResponse,
  MedicamentoNovoRequest,
  MedicamentoAtualizacaoRequest
> {
  constructor() {
    super('medicamentos');
  }
}
